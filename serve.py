#!/usr/bin/env python3
"""Liten lokal utvecklingsserver för thailamdee.

Skickar no-cache-headers på allt så att webbläsaren aldrig visar en gammal
version — inga hårda omladdningar, ingen cache-strul. Kör:

    python3 serve.py            # port 8199
    python3 serve.py 8080       # egen port
"""
import http.server
import os
import socket
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8199
ROOT = os.path.dirname(os.path.abspath(__file__))
PAGE = "/ui_kits/website/index.html"


def lan_ip():
    """Datorns IP på det lokala nätverket (för att öppna sidan på telefonen)."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))  # skickar inget – används bara för att välja rätt gränssnitt
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


class Server(socketserver.TCPServer):
    allow_reuse_address = True


# ("", PORT) binder till alla gränssnitt (0.0.0.0) – nåbar från andra enheter på nätet.
with Server(("", PORT), NoCacheHandler) as httpd:
    ip = lan_ip()
    print("Serverar " + ROOT)
    print("")
    print("  Här på datorn:   http://localhost:%d%s" % (PORT, PAGE))
    print("  På telefonen:    http://%s:%d%s" % (ip, PORT, PAGE))
    print("")
    print("  (Telefonen måste vara på samma Wi-Fi. Tillåt inkommande")
    print("   anslutningar om macOS-brandväggen frågar.)")
    print("")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
