from PyQt5.QtWidgets import QApplication ,QWidget, QLabel, QPushButton
from PyQt5.QtCore import Qt, QRect
from PyQt5.QtGui import QPixmap

app = QApplication([])

class Window(QWidget):
    def __init__(self):
        super().__init__()
        self.map = QLabel()
        map_pixmap = QPixmap("images.flour1.jpg")
        self.map.setPixmap(map_pixmap)
        self.map.setGeometry(QRect(0, 0, 721, 601))


flour1_widget = Window()
flour1_widget.show()
app.exec_()