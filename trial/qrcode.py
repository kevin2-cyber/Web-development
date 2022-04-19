import io
import qrcode

qr = qrcode.qrcode()
qr.add_data("Hello, World")
f = io.StringIO()
qr.print_ascii(out=f)
f.seek(0)
print(f.read())