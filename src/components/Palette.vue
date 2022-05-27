<template>
  <div class="details-container fixed left-0 top-0 w-full h-full">
    <div
      class="detail-content w-90% h-90% mt-4 mx-auto rounded-lg overflow-y-auto overflow-x-hidden"
    >

    <div class="px-4 py-3 bg-cd-light-100 relative">
        <h1
          @click="closePalette"
          class="absolute top-2 right-10 z-50 text-5xl cursor-pointer hover:text-yellow-300 "
        >
          x
        </h1>
        <div class="my-6">
          <h1 class="text-5xl tracking-tight">{{ palette.title }}</h1>
        </div>
        <div
          class="flex w-full overflow-hidden border border-slate-200 rounded-md"
        >
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.main }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.main }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.primary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.primary }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.secondary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.secondary }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.tertiary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.tertiary }}
              </button>
            </p>
          </div>
        </div>

        <div class="mt-5 border-t-2 border-slate-300">
          <h1>DEMO</h1>
          <div
            class="palette-grid grid w-full h-auto grid-cols-1 gap-5 md:grid-cols-2 mt-2 p-3"
          >
            <div class="">
              <div class="svg">
                <svg
                  viewBox="0 0 1920 1084"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_3)">
                    <rect
                      width="1600"
                      height="1024"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <g filter="url(#filter0_d_1_3)">
                      <rect
                        width="272"
                        height="1024"
                        :style="{ fill: palette.colors.tertiary }"
                      />
                      <rect
                        x="71"
                        y="48"
                        width="48"
                        height="48"
                        rx="12"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="144"
                        width="192"
                        height="48"
                        rx="10"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="708"
                        width="192"
                        height="232"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <rect
                        x="40"
                        y="252"
                        width="192"
                        height="382"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <line
                        x1="135.997"
                        y1="69.5"
                        x2="217.003"
                        y2="69.5"
                        :style="{ stroke: palette.colors.primary }"
                        stroke-width="12"
                      />
                    </g>
                    <path
                      d="M312 58C312 52.4772 316.477 48 322 48H777.691C783.214 48 787.691 52.4772 787.691 58V94C787.691 99.5229 783.214 104 777.691 104H322C316.477 104 312 99.5228 312 94V58Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M776 706C776 700.477 780.477 696 786 696H1139C1144.52 696 1149 700.477 1149 706V940C1149 945.523 1144.52 950 1139 950H786C780.477 950 776 945.523 776 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 706C326 700.477 330.477 696 336 696H689C694.523 696 699 700.477 699 706V940C699 945.523 694.523 950 689 950H336C330.477 950 326 945.523 326 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 262C326 256.477 330.477 252 336 252H1131C1136.52 252 1141 256.477 1141 262V622C1141 627.523 1136.52 632 1131 632H336C330.477 632 326 627.523 326 622V262Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <line
                      x1="878"
                      y1="187"
                      x2="948.034"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="990"
                      y1="187"
                      x2="1060.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="1109"
                      y1="187"
                      x2="1179.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="326"
                      y1="187"
                      x2="512.011"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <rect
                      x="1216"
                      width="384"
                      height="1024"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <rect
                      x="1248"
                      y="759"
                      width="312"
                      height="181"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1248"
                      y="517"
                      width="308"
                      height="191"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1252"
                      y="161"
                      width="312"
                      height="281"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1283"
                      y="48"
                      width="48"
                      height="48"
                      rx="12"
                      :style="{ fill: palette.colors.main }"
                    />
                    <line
                      x1="1344"
                      y1="70"
                      x2="1530.01"
                      y2="70"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3"
                      x="-4"
                      y="0"
                      width="280"
                      height="1032"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_3">
                      <rect width="1600" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="">
              <div class="svg">
                <svg
                  viewBox="0 0 1920 1084"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_3)">
                    <rect
                      width="1600"
                      height="1024"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <g filter="url(#filter0_d_1_3)">
                      <rect
                        width="272"
                        height="1024"
                        :style="{ fill: palette.colors.tertiary }"
                      />
                      <rect
                        x="71"
                        y="48"
                        width="48"
                        height="48"
                        rx="12"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="144"
                        width="192"
                        height="48"
                        rx="10"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="708"
                        width="192"
                        height="232"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <rect
                        x="40"
                        y="252"
                        width="192"
                        height="382"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <line
                        x1="135.997"
                        y1="69.5"
                        x2="217.003"
                        y2="69.5"
                        :style="{ stroke: palette.colors.primary }"
                        stroke-width="12"
                      />
                    </g>
                    <path
                      d="M312 58C312 52.4772 316.477 48 322 48H777.691C783.214 48 787.691 52.4772 787.691 58V94C787.691 99.5229 783.214 104 777.691 104H322C316.477 104 312 99.5228 312 94V58Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M776 706C776 700.477 780.477 696 786 696H1139C1144.52 696 1149 700.477 1149 706V940C1149 945.523 1144.52 950 1139 950H786C780.477 950 776 945.523 776 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 706C326 700.477 330.477 696 336 696H689C694.523 696 699 700.477 699 706V940C699 945.523 694.523 950 689 950H336C330.477 950 326 945.523 326 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 262C326 256.477 330.477 252 336 252H1131C1136.52 252 1141 256.477 1141 262V622C1141 627.523 1136.52 632 1131 632H336C330.477 632 326 627.523 326 622V262Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <line
                      x1="878"
                      y1="187"
                      x2="948.034"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="990"
                      y1="187"
                      x2="1060.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="1109"
                      y1="187"
                      x2="1179.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="326"
                      y1="187"
                      x2="512.011"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <rect
                      x="1216"
                      width="384"
                      height="1024"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <rect
                      x="1248"
                      y="759"
                      width="312"
                      height="181"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1248"
                      y="517"
                      width="308"
                      height="191"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1252"
                      y="161"
                      width="312"
                      height="281"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1283"
                      y="48"
                      width="48"
                      height="48"
                      rx="12"
                      :style="{ fill: palette.colors.main }"
                    />
                    <line
                      x1="1344"
                      y1="70"
                      x2="1530.01"
                      y2="70"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3"
                      x="-4"
                      y="0"
                      width="280"
                      height="1032"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_3">
                      <rect width="1600" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="">
              <div class="svg">
                <svg
                  viewBox="0 0 1920 1084"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_3)">
                    <rect
                      width="1600"
                      height="1024"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <g filter="url(#filter0_d_1_3)">
                      <rect
                        width="272"
                        height="1024"
                        :style="{ fill: palette.colors.tertiary }"
                      />
                      <rect
                        x="71"
                        y="48"
                        width="48"
                        height="48"
                        rx="12"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="144"
                        width="192"
                        height="48"
                        rx="10"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="708"
                        width="192"
                        height="232"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <rect
                        x="40"
                        y="252"
                        width="192"
                        height="382"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <line
                        x1="135.997"
                        y1="69.5"
                        x2="217.003"
                        y2="69.5"
                        :style="{ stroke: palette.colors.primary }"
                        stroke-width="12"
                      />
                    </g>
                    <path
                      d="M312 58C312 52.4772 316.477 48 322 48H777.691C783.214 48 787.691 52.4772 787.691 58V94C787.691 99.5229 783.214 104 777.691 104H322C316.477 104 312 99.5228 312 94V58Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M776 706C776 700.477 780.477 696 786 696H1139C1144.52 696 1149 700.477 1149 706V940C1149 945.523 1144.52 950 1139 950H786C780.477 950 776 945.523 776 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 706C326 700.477 330.477 696 336 696H689C694.523 696 699 700.477 699 706V940C699 945.523 694.523 950 689 950H336C330.477 950 326 945.523 326 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 262C326 256.477 330.477 252 336 252H1131C1136.52 252 1141 256.477 1141 262V622C1141 627.523 1136.52 632 1131 632H336C330.477 632 326 627.523 326 622V262Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <line
                      x1="878"
                      y1="187"
                      x2="948.034"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="990"
                      y1="187"
                      x2="1060.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="1109"
                      y1="187"
                      x2="1179.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="326"
                      y1="187"
                      x2="512.011"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <rect
                      x="1216"
                      width="384"
                      height="1024"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <rect
                      x="1248"
                      y="759"
                      width="312"
                      height="181"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1248"
                      y="517"
                      width="308"
                      height="191"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1252"
                      y="161"
                      width="312"
                      height="281"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1283"
                      y="48"
                      width="48"
                      height="48"
                      rx="12"
                      :style="{ fill: palette.colors.main }"
                    />
                    <line
                      x1="1344"
                      y1="70"
                      x2="1530.01"
                      y2="70"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3"
                      x="-4"
                      y="0"
                      width="280"
                      height="1032"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_3">
                      <rect width="1600" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="">
              <div class="svg">
                <svg
                  viewBox="0 0 1920 1084"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_3)">
                    <rect
                      width="1600"
                      height="1024"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <g filter="url(#filter0_d_1_3)">
                      <rect
                        width="272"
                        height="1024"
                        :style="{ fill: palette.colors.tertiary }"
                      />
                      <rect
                        x="71"
                        y="48"
                        width="48"
                        height="48"
                        rx="12"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="144"
                        width="192"
                        height="48"
                        rx="10"
                        :style="{ fill: palette.colors.main }"
                      />
                      <rect
                        x="40"
                        y="708"
                        width="192"
                        height="232"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <rect
                        x="40"
                        y="252"
                        width="192"
                        height="382"
                        rx="12"
                        :style="{ fill: palette.colors.secondary }"
                      />
                      <line
                        x1="135.997"
                        y1="69.5"
                        x2="217.003"
                        y2="69.5"
                        :style="{ stroke: palette.colors.primary }"
                        stroke-width="12"
                      />
                    </g>
                    <path
                      d="M312 58C312 52.4772 316.477 48 322 48H777.691C783.214 48 787.691 52.4772 787.691 58V94C787.691 99.5229 783.214 104 777.691 104H322C316.477 104 312 99.5228 312 94V58Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M776 706C776 700.477 780.477 696 786 696H1139C1144.52 696 1149 700.477 1149 706V940C1149 945.523 1144.52 950 1139 950H786C780.477 950 776 945.523 776 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 706C326 700.477 330.477 696 336 696H689C694.523 696 699 700.477 699 706V940C699 945.523 694.523 950 689 950H336C330.477 950 326 945.523 326 940V706Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <path
                      d="M326 262C326 256.477 330.477 252 336 252H1131C1136.52 252 1141 256.477 1141 262V622C1141 627.523 1136.52 632 1131 632H336C330.477 632 326 627.523 326 622V262Z"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <line
                      x1="878"
                      y1="187"
                      x2="948.034"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="990"
                      y1="187"
                      x2="1060.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="1109"
                      y1="187"
                      x2="1179.03"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <line
                      x1="326"
                      y1="187"
                      x2="512.011"
                      y2="187"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                    <rect
                      x="1216"
                      width="384"
                      height="1024"
                      :style="{ fill: palette.colors.tertiary }"
                    />
                    <rect
                      x="1248"
                      y="759"
                      width="312"
                      height="181"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1248"
                      y="517"
                      width="308"
                      height="191"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1252"
                      y="161"
                      width="312"
                      height="281"
                      rx="8"
                      :style="{ fill: palette.colors.secondary }"
                    />
                    <rect
                      x="1283"
                      y="48"
                      width="48"
                      height="48"
                      rx="12"
                      :style="{ fill: palette.colors.main }"
                    />
                    <line
                      x1="1344"
                      y1="70"
                      x2="1530.01"
                      y2="70"
                      :style="{ stroke: palette.colors.primary }"
                      stroke-width="12"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3"
                      x="-4"
                      y="0"
                      width="280"
                      height="1032"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_3">
                      <rect width="1600" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      newpalette: this.palette,
    };
  },
  computed: {
    ...mapGetters(["allPalettes"]),
    palette() {
      return this.allPalettes.find(
        (palette) => palette.id === parseInt(this.id)
      );
    },
  },
  methods: {
    closePalette() {
      this.$emit('close')
    },
  },
};
</script>

<style>


</style>
