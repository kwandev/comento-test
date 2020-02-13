<template>
  <b-modal id="modal_filter" ref="modal" centered @show="resetModal">
    <template v-slot:modal-header="{ close }">
      <h5 class="modal__title">필터</h5>
      <btn icon class="close" @click="close()">
        &times;
      </btn>
    </template>

    <form ref="form" @submit.stop.prevent>
      <b-form-checkbox
        v-for="category in categories"
        :key="category.id"
        v-model="filters"
        :name="`category_${category.id}`"
        :id="`category_${category.id}`"
        :value="category.id"
      >
        {{ category.name }}
      </b-form-checkbox>
    </form>

    <template v-slot:modal-footer>
      <btn variant="primary" @click="handleOk" class="btn__save">저장하기</btn>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalFilter',
  data() {
    return {
      filters: []
    }
  },
  computed: {
    ...mapGetters('feed', {
      categories: 'categories',
      categoryFilter: 'categoryFilter'
    })
  },
  methods: {
    initFilter() {
      this.filters = this.categoryFilter
    },
    resetModal() {
      const now = this.filters.sort()
      const prev = this.categoryFilter.sort().every((select, index) => {
        return now[index] === select
      })

      if (!prev) {
        this.initFilter()
      }
    },
    handleOk() {
      if (this.filters.length === 0) {
        this.$bvModal.hide('modal_filter')
        return
      }

      this.$store.commit('feed/setCategoryFilter', this.filters)

      this.$store.dispatch('feed/initFeeds')
      this.$store.dispatch('feed/fetchFeeds')

      this.$bvModal.hide('modal_filter')
    }
  },
  mounted() {
    this.initFilter()
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: $contents-width-m) {
  .btn__save {
    display: block;
    width: 100%;
  }
}
</style>
