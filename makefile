VERSION = $(shell cat VERSION)

build:
	mkdir ./build
	cp ./lib/thumbs.js ./build/thumbs.${VERSION}.js
	java -jar ./vendor/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./lib/thumbs.js -o ./build/thumbs.${VERSION}.min.js
