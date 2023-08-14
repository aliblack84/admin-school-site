<script setup>
import { computed, onMounted, ref } from "vue";
import { useMainStore } from "@/stores/main";
import { mdiDownload, mdiEye, mdiTrashCan } from "@mdi/js";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import {get_students, download_excel, get_url} from '@/modules'
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

defineProps({
  checkable: Boolean,
});

const mainStore = useMainStore();

const items = ref([]);

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

onMounted(async () => {

  const stds = await get_students()
  items.value = []

  for (let i = 0; i < stds.data.length; i++) {
    const std = stds.data[i];
    items.value.push({
      name: std.split('-')[1] + ' ' + std.split('-')[2],
      company: std.split('-')[0],
      city: std.split('-')[3].split('.')[0]
    })
  }
})

const download = async (nCode) => {
  const link = get_url('/student?nCode=' + nCode + '&' + 'xToken=' + localStorage.getItem('x-token'))

  window.open(link)
}

const itemsPaginated = computed(() =>
  items.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

const remove = (arr, cb) => {
  const newArr = [];

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item);
    }
  });

  return newArr;
};

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client);
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.id === client.id
    );
  }
};
</script>

<template>




  <table >
    <thead >
      <tr >
        <th v-if="checkable" />
        <th style="text-align: center ;">نام</th>
        <th style="text-align: center;">کد ملی</th>
        <th style="text-align: center">رشته</th>

        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in itemsPaginated" :key="client.id">
 
        <td class="border-b-0 lg:w-6 before:hidden">

        </td>
        <td style="text-align: center;" data-label="نام">
          {{ client.name }}
        </td>
        <td style="text-align: center;" data-label="کد ملی">
          {{ client.company }}
        </td>
        <td style="text-align: center;" data-label="رشته">
          {{ client.city }}
        </td>
  

        <td class="before:hidden  whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton
              color="info"
              :icon="mdiDownload"
              small
              @click="download(client.company)"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div style="" class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800 ">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>

