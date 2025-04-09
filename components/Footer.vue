<template>
  <div class="flex flex-col min-h-screen font-poppins">
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <footer
      class="relative bg-[#f7f7f8] mt-20 text-black pt-12 px-4 sm:px-8 w-full"
    >
      <div
        class="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
      >
        <!-- Logo & Info -->
        <div class="space-y-4 text-sm font-normal">
          <div class="flex items-center space-x-3">
            <img
              src="assets/images/FooterImages/footer-logo.png"
              alt="Logo"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h2 class="font-bold text-lg">Foodzy</h2>
              <p class="text-sm text-gray-500">A Treasure of Tastes</p>
            </div>
          </div>
          <p class="text-gray-600">
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div class="space-y-2 text-gray-600">
            <div class="flex items-start space-x-2">
              <img
                src="assets/icons/FooterIcons/red-location.svg"
                class="w-5 h-6 mt-1"
              />
              <p>
                51 Green St. Huntington ohajo beach ontario, NY 11746 KY 4783,
                USA.
              </p>
            </div>
            <div class="flex items-start space-x-2">
              <img
                src="assets/icons/FooterIcons/red-mail.svg"
                class="w-5 h-6 mt-1"
              />
              <p>
                <a href="mailto:example@email.com" class="hover:underline"
                  >example@email.com</a
                >
              </p>
            </div>
            <div class="flex items-start space-x-2">
              <img
                src="assets/icons/FooterIcons/red-phone.svg"
                class="w-5 h-6 mt-1"
              />
              <p>
                <a href="tel:+911234567890" class="hover:underline"
                  >+91 123 4567890</a
                >
              </p>
            </div>
          </div>
        </div>

        <!-- Company -->
        <div class="mt-6 lg:mt-0">
          <h3 class="font-bold text-lg mb-4">Company</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li>
              <a href="#" class="hover:underline">Delivery Information</a>
            </li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
            <li><a href="#" class="hover:underline">Support Center</a></li>
          </ul>
        </div>

        <!-- Category -->
        <div class="mt-6 lg:mt-0">
          <h3 class="font-bold text-lg mb-4">Category</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li><a href="#" class="hover:underline">Dairy & Bakery</a></li>
            <li><a href="#" class="hover:underline">Fruits & Vegetable</a></li>
            <li><a href="#" class="hover:underline">Snack & Spice</a></li>
            <li><a href="#" class="hover:underline">Juice & Drinks</a></li>
            <li><a href="#" class="hover:underline">Chicken & Meat</a></li>
            <li><a href="#" class="hover:underline">Fast Food</a></li>
          </ul>
        </div>

        <!-- Newsletter & 5 ürün görseli -->
        <div class="mt-6 lg:mt-0 flex flex-col justify-between h-full">
          <div class="w-full">
            <h3 class="font-bold text-lg mb-4">Subscribe Our Newsletter</h3>

            <div class="relative mb-4 w-full sm:w-[300px] md:w-[360px]">
              <input
                type="text"
                placeholder="Search here..."
                class="w-full px-3 pr-10 py-2 h-10 border border-gray-300 rounded-md text-sm focus:outline-none"
              />
              <img
                src="assets/icons/FooterIcons/vector.svg"
                alt="Search"
                class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>

            <div class="flex gap-2 mb-4">
              <a href="#"
                ><img
                  src="assets/images/FooterImages/fbook.png"
                  class="w-8 h-8 object-contain"
              /></a>
              <a href="#"
                ><img
                  src="assets/images/FooterImages/x.png"
                  class="w-8 h-8 object-contain"
              /></a>
              <a href="#"
                ><img
                  src="assets/images/FooterImages/ball.png"
                  class="w-8 h-8 object-contain"
              /></a>
              <a href="#"
                ><img
                  src="assets/images/FooterImages/Insta.png"
                  class="w-8 h-8 object-contain"
              /></a>
            </div>
          </div>

          <!-- ✅ 5 ürün görseli: sabit yatay, responsive -->
          <div class="w-full mt-4">
            <div class="flex justify-between items-center gap-2 w-full">
              <img
                src="assets/images/FooterImages/img1.png"
                class="w-[60px] h-[60px] object-cover rounded-md"
              />
              <img
                src="assets/images/FooterImages/img2.png"
                class="w-[60px] h-[60px] object-cover rounded-md"
              />
              <img
                src="assets/images/FooterImages/img3.png"
                class="w-[60px] h-[60px] object-cover rounded-md"
              />
              <img
                src="assets/images/FooterImages/img4.png"
                class="w-[60px] h-[60px] object-cover rounded-md"
              />
              <img
                src="assets/images/FooterImages/img5.png"
                class="w-[60px] h-[60px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative z-10 max-w-[1300px] mx-auto px-4 mt-6">
        <div class="h-px bg-[#e9e9e9] mb-6"></div>
        <div class="text-center text-sm text-black mb-6">
          © 2025 <span class="text-red-500 font-semibold">Foodzy</span>, All
          rights reserved.
        </div>
      </div>

      <!-- Dekoratif Görseller -->
      <img
        src="/images/Footer/lemon.png"
        alt="Lemon"
        class="absolute bottom-[200px] left-0 w-12 sm:w-14 md:w-[60px] h-auto z-0"
      />
      <img
        src="/images/Footer/tomato.png"
        alt="Tomato"
        class="hidden sm:block absolute -top-[30px] right-24 w-[70px] h-auto z-0"
      />
      <img
        src="/images/Footer/pepper.png"
        alt="Pepper"
        class="hidden sm:block absolute bottom-8 right-24 w-[100px] md:w-[120px] h-auto z-0"
      />
    </footer>
  </div>
</template>
