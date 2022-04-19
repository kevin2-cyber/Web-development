import io
import qrcode

img = qrcode.make("Hello World")
img.save('hello.png')