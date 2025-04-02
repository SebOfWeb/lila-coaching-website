from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    os.environ['PYTHONUNBUFFERED'] = '1'
    httpd = HTTPServer(('localhost', 8000), NoCacheHandler)
    print('Serving at http://localhost:8000/')
    httpd.serve_forever() 