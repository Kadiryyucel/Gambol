<template>
  <div class="home">
    <div class="homeHead" ref="ihead">
      <img class="homeİmg" src="../assets/BigGambol.jpeg" />
    </div>
    <section>
      <div class="wrapper">
        <div class="middle-wrapper">
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/missle control.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Missile Control</span>
                <div>
                  <a
                    href="https://apps.apple.com/us/app/missile-control-3d/id1509332237"
                    alt="Missle Control"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/scale-puzzle.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Scale Puzzle</span>
                <div>
                  <a class="content" href="https://apps.apple.com/us/app/scale-puzzle/id1512538886">
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/pick.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Pick My Stuff</span>
                <div>
                  <a
                    class="content"
                    href="https://apps.apple.com/us/app/pick-my-stuff/id1478156071"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/market.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Supermarket</span>
                <div>
                  <a
                    class="content"
                    href="https://apps.apple.com/us/app/supermarket-3d/id1504564488"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/gungam.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Gungam</span>
                <div>
                  <a class="content" href="https://apps.apple.com/us/app/gungam/id1496793280">
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/tenis.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Fun Tennis 3D</span>
                <div>
                  <a
                    class="content"
                    href="https://apps.apple.com/us/app/fun-tennis-3d/id1473118789"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/auto.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Auto Thief 3D</span>
                <div>
                  <a
                    class="content"
                    href="https://apps.apple.com/us/app/auto-thief-3d/id1526219927"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="content-wrapper">
            <figure class="margin-wrapper">
              <picture>
                <img class="item" src="../assets/ballon.jpeg" />
              </picture>
              <figcaption class="clone">
                <span class="title">Touch it Down</span>
                <div>
                  <a
                    class="content"
                    href="https://apps.apple.com/us/app/mr-balloon-3d/id1519265684"
                  >
                    <img class="apple" src="../assets/apple.png" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <foot />
      </div>
    </section>
  </div>
</template>

<script>
import foot from "../components/Footer";
export default {
  components: {
    foot,
  },
  methods: {
    myFunction() {
      let state = document.getElementsByClassName("homeİmg")[0];
      console.log("selam");
      console.log(window.scrollY);
      if (window.scrollY > 0) state.style.top = (window.scrollY - 150) + "px";
    },
  },
  mounted() {
    window.addEventListener("scroll",this.myFunction)
  },
  destroyed() {
    window.removeEventListener("scroll",this.myFunction);
  },
};
</script>
<style scoped>

@font-face {
  font-family: frist;
  src: url(../assets/sono/fonts/static/ttf/Sono-Bold.ttf);
}

.homeİmg{
  bottom: 150px;
}
.content-wrapper {
  background-image: linear-gradient(
    115deg,
    #4fcf70,
    #fad648,
    #a767e5,
    #12bcfe,
    #44ce7b
  );
  height: 272px;
  width: 272px;
}
.content-wrapper:hover .margin-wrapper {
  transform: scale(0.9);
}
.apple {
  width: 120px;
  height: 100px;
}
.title {
  font-family: frist;
  font-size: 25px;
  color: white;
  letter-spacing: 5px;
}
.clone {
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.35s, transform 0.35s;
  transition-delay: 0.15s;
}
.margin-wrapper:hover .item {
  opacity: 0.7;
}
.margin-wrapper:hover .clone {
  visibility: visible;
  transition-delay: 0.15s;
}
.homeHead {
  height: 525px;
  overflow: hidden;
  position: relative;
  margin: 0 0 30px 0;
}
img {
  width: 100%;
  height: 700px;
  position: relative;
}
.middle-wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 0 90px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
}
.margin-wrapper {
  position: relative;
  height: 272px;
  width: 272px;
  transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.25s,
    transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0.25s;
  margin: 0px;
  background-color: black;
}

.item {
  width: 272px;
  height: 272px;
}
.item:hover {
  opacity: 0.5;
}
</style>
