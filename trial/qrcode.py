import io
import qrcode

qr = qrcode()
qr.add_data("Hello, World")
f = io.StringIO()
qr.print_ascii(out=f)
f.seek(0)
print(f.read())