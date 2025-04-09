<template>
  <div
    class="w-full min-h-[87px] py-4 px-4 sm:px-6 lg:px-[11%] flex flex-wrap items-center justify-between gap-y-4 gap-x-6 backdrop-blur-[8px]"
    style="background: linear-gradient(to bottom, #ededed 0%, #ffffff 5%)"
  >
    <!-- Logo -->
    <a href="/" class="flex-shrink-0">
      <img
        src="~/assets/images/HeaderImages/logo.jpg"
        alt="Logo"
        class="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[192px] h-auto"
      />
    </a>

    <!-- Search Bar -->
    <form
      class="flex-grow mr-[100px] flex-shrink w-full sm:w-auto max-w-full md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] h-[45px] flex items-center"
    >
      <div
        class="flex w-full h-full border rounded-l-[5px] overflow-hidden"
        :style="{ borderColor: '#64B496' }"
      >
        <input
          type="search"
          placeholder="Search For items..."
          required
          class="w-full h-full font-normal px-4 text-[13px] text-[#212529] bg-white focus:outline-none"
        />

        <!-- Category Dropdown -->
        <div class="hidden md:flex">
          <button
            type="button"
            class="h-full inline-flex items-center justify-between px-4 text-[#212529] bg-white border-l w-[130px]"
            :style="{
              borderColor: '#64B496',
              fontFamily: 'Segoe UI',
              fontWeight: '400',
              fontSize: '13px',
            }"
          >
            All Categories
            <img
              src="~/assets/icons/HeaderIcons/vector-searchbar.svg"
              alt="Dropdown Icon"
              class="ml-2 w-[10px] h-[5px]"
            />
          </button>
        </div>
      </div>

      <!-- Search Button -->
      <button
        type="submit"
        class="h-[45px] px-3 sm:px-4 text-sm font-medium text-white bg-[#2B2B2D] flex items-center justify-center rounded-r-[5px]"
      >
        <img
          src="~/assets/icons/HeaderIcons/search.svg"
          alt="Search"
          class="w-[14px] h-[14px]"
        />
      </button>
    </form>

    <!-- Account, Wishlist, Cart -->
    <div
      class="flex-shrink-0 flex items-center space-x-3 sm:space-x-4 md:space-x-6"
    >
      <button
        class="flex items-center space-x-1 text-sm text-black font-poppins font-medium"
      >
        <img
          src="~/assets/icons/HeaderIcons/account.svg"
          class="w-[20px] h-[20px]"
          alt="Account"
        />
        <span class="hidden sm:inline">Account</span>
      </button>
      <button
        class="flex items-center space-x-1 text-sm text-black font-poppins font-medium"
      >
        <img
          src="~/assets/icons/HeaderIcons/wishlist.svg"
          class="w-[19px] h-[18px]"
          alt="Wishlist"
        />
        <span class="hidden sm:inline">Wishlist</span>
      </button>
      <button
        class="flex items-center space-x-1 text-sm text-black font-poppins font-medium"
      >
        <img
          src="~/assets/icons/HeaderIcons/cart.svg"
          class="w-[18px] h-[18px]"
          alt="Cart"
        />
        <span class="hidden sm:inline">Cart</span>
      </button>
    </div>
  </div>
</template>
