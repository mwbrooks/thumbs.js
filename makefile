build:
	mkdir ./build
	java -jar ./vendor/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./lib/thumbs.js -o ./build/thumbs.min.js
	cp ./lib/thumbs.js ./build/thumbs.js