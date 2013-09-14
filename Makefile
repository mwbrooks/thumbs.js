VERSION = $(shell git describe --tags --abbrev=0)

build: clean
	mkdir ./build
	cp ./lib/thumbs.js ./build/thumbs.${VERSION}.js
	java -jar ./vendor/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./lib/thumbs.js -o ./build/thumbs.${VERSION}.min.js

clean:
	rm -Rf ./build
