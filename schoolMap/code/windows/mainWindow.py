# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'design\mainwindow.ui'
#
# Created by: PyQt5 UI code generator 5.15.10
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(720, 600)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.widget = QtWidgets.QWidget(self.centralwidget)
        self.widget.setGeometry(QtCore.QRect(0, 0, 721, 601))
        self.widget.setStyleSheet("QWidget {\n"
"background-color: #17181D;\n"
"}")
        self.widget.setObjectName("widget")
        self.widget_2 = QtWidgets.QWidget(self.widget)
        self.widget_2.setGeometry(QtCore.QRect(0, 0, 231, 157))
        self.widget_2.setStyleSheet("QWidget{\n"
"border-right: 2px solid white;\n"
"border-bottom: 2px solid white;\n"
"border-bottom-right-radius: 20px;\n"
"}")
        self.widget_2.setObjectName("widget_2")
        self.label = QtWidgets.QLabel(self.widget_2)
        self.label.setGeometry(QtCore.QRect(15, 38, 194, 82))
        self.label.setStyleSheet("border: none;")
        self.label.setText("")
        self.label.setPixmap(QtGui.QPixmap(":/photo/photo/logo.png"))
        self.label.setScaledContents(True)
        self.label.setObjectName("label")
        self.label_2 = QtWidgets.QLabel(self.widget)
        self.label_2.setGeometry(QtCore.QRect(550, 0, 171, 90))
        self.label_2.setText("")
        self.label_2.setPixmap(QtGui.QPixmap(":/photo/photo/navigation.png"))
        self.label_2.setScaledContents(True)
        self.label_2.setObjectName("label_2")
        self.pushButton = QtWidgets.QPushButton(self.widget)
        self.pushButton.setGeometry(QtCore.QRect(560, 14, 61, 61))
        self.pushButton.setStyleSheet("QPushButton {\n"
"background-color: rgba(0, 0, 0, 0.5);\n"
"border-radius: 30px;\n"
"}")
        self.pushButton.setText("")
        self.pushButton.setObjectName("pushButton")
        self.pushButton_3 = QtWidgets.QPushButton(self.widget)
        self.pushButton_3.setGeometry(QtCore.QRect(650, 12, 61, 61))
        self.pushButton_3.setStyleSheet("QPushButton {\n"
"background-color: rgba(0, 0, 0, 0.5);\n"
"border-radius: 30px;\n"
"}")
        self.pushButton_3.setText("")
        self.pushButton_3.setObjectName("pushButton_3")
        self.label_3 = QtWidgets.QLabel(self.widget)
        self.label_3.setGeometry(QtCore.QRect(500, 550, 111, 31))
        self.label_3.setStyleSheet("QLabel {\n"
"color: white;\n"
"font: 16pt \"Daneehand Regular Cyr\";\n"
"}")
        self.label_3.setObjectName("label_3")
        self.label_4 = QtWidgets.QLabel(self.widget)
        self.label_4.setGeometry(QtCore.QRect(630, 550, 131, 31))
        self.label_4.setStyleSheet("QLabel {\n"
"color: white;\n"
"font: 16pt \"Daneehand Regular Cyr\";\n"
"}")
        self.label_4.setObjectName("label_4")
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.label_3.setText(_translate("MainWindow", "поддержка"))
        self.label_4.setText(_translate("MainWindow", "авторы"))
import main_style_rc


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())
