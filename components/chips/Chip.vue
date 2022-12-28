<template>
  <div class="chip--container">
    <div
      class="chip--top"
      :style="{ backgroundImage: `url(${chipsData.metadata.images[0]})` }"
    >
      <div class="chip--top__favourite">
        <svg
          @click="toggleFavourite"
          :class="{ favourite: isFavourited === 1 }"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="chip--details">
      <h5 class="chip--details__name">{{ chipsData.metadata.title }}</h5>
      <p class="chip--details__desc">
        {{ chipsData.metadata.description }}
      </p>
      <a
        class="chip--details__link"
        :href="chipsData.url"
        target="_blank"
        @click="incrementClickCount"
      >
        <p>{{ chipsData.url }}</p>
        <img src="/icons/link-icon.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
// import Vibrant from "node-vibrant";

import { toggleChipFavourite, incrementClicks } from "~/services/user";

export default {
  props: {
    chipsData: { type: Object },
  },

  data() {
    return {
      isFavourited: this.chipsData.is_favorite,
    };
  },

  methods: {
    // getPalette() {
    //   const img = this.chipsData.metadata.images[0];

    //   if (img != undefined) {
    //     const vibrant = new Vibrant(img);

    //     vibrant.getPalette().then(
    //       (palette) => console.log(`palette`, palette)
    //       // (reason) => {
    //       //   console.error(reason);
    //       // }
    //     );
    //   }
    // },

    async toggleFavourite() {
      console.log(this.chipsData.id);
      try {
        await toggleChipFavourite(this.chipsData.id);

        if (this.isFavourited != 1) {
          this.isFavourited = 1;
        } else {
          this.isFavourited = 0;
        }
      } catch (error) {
        // this.isFavourited = !this.isFavourited;
      }
    },

    async incrementClickCount() {
      await incrementClicks(this.chipsData.id);
    },
  },

  mounted() {
    // this.getPalette();
  },
};
</script>

<style scoped>
.chip--container {
  /* margin-top: 40px; */
  width: 348px;
  height: 377px;
  background: #e3f2fc;
  /* background: #232f3f; */
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.chip--top {
  width: 100%;
  height: 165px;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

.chip--top__favourite {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  /* mix-blend-mode: overlay; */
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chip--top__favourite > svg {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.chip--top__favourite > svg > path {
  transition: all 0.1s ease-in-out;
}

.chip--top__favourite > svg.favourite {
  fill: rgb(204, 27, 27);
}
.chip--top__favourite > svg.favourite > path {
  stroke: rgb(204, 27, 27);
}

.chip--details {
  width: 100%;
  height: 212px;
  background: hwb(0 25% 32%);
  background: #ffffff;
  border-radius: 0px 0px 12px 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 20px 30px 16px;
}

.chip--details__name {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: #333333;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chip--details__desc {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-align: left;
  color: #808080;
  width: 284px;
  margin-top: 16px;
  margin-bottom: 16px;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chip--details__link {
  width: 100%;
  /* margin-top: 28px; */
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.chip--details__link > p {
  font-style: italic;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #121212;
  text-decoration: underline;
  cursor: pointer;
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chip--details__link > img {
  cursor: pointer;
}
</style>
