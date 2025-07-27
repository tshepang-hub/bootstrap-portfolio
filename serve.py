#!/usr/bin/env python3
"""
Simple HTTP server to serve the portfolio website locally.
This allows testing GitHub API integration without CORS issues.
"""

import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def open_browser():
    webbrowser.open(f'http://localhost:{PORT}/index.html')

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Portfolio server running at http://localhost:{PORT}/index.html")
        print(f"📁 Serving from: {os.getcwd()}")
        print("Press Ctrl+C to stop the server")
        
        # Open browser after a short delay
        Timer(1, open_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped")
            httpd.shutdown()
