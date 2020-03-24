<template>
  <div class="content__out">
    <div class="content__in">
      <TextBox
        v-for="homeContent in content.home"
        :key="homeContent.id"
        :hedding1="homeContent.hedding1"
        :hedding2="homeContent.hedding2"
        :content1="homeContent.content1"
        :content2="homeContent.content2"
        :content3="homeContent.content3"
      />
      <Picture />
    </div>
  </div>
</template>

<script>
import Picture from "../components/Picture";
import TextBox from "../components/TextBox";

export default {
  name: "WrapperContent",
  components: {
    Picture,
    TextBox
  },
  data() {
    return {
      content: {
        home: [
          {
            hedding1: "Hello I'm Inuk,",
            hedding2: "Front End Developer",
            content1:
              "I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application.",
            content2:
              "I've always have had a big interest in new technologies therefore I have started programming on my own.",
            content3:
              "I'm looking forward to the future with excitement, seeing the potential and possibilities we have these days thanks to the progress of science."
          }
        ]
      }
    };
  }
};
</script>

<style></style>
