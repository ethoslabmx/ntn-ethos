<template>
  <div>
    <div class="com">
      <div class="com__content">
        <section class="com__section com__section--text">
          <h1 class="animate slideInLeft">HISTORIAS DE ÉXITO</h1>
          <p class="animate slideInLeft delay-3">
            Nuestros casos de éxito con origen en la investigación que se enfoncan en casos específicos.
          </p>
        </section>
        <section class="com__section com__section--text com__section--text-img">
          <div class="">
            <h1 class="animate">Escudo ciudadano</h1>
            <lite-youtube
                videoid="ke-NGxVe2tU"
                playlabel="Escudo Ciudadano"
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                class=""
              />
          </div>

        </section>
        <section class="com__section com__section--text centered">
          <h1 class="animate scaleIn">Otra Historia</h1>
          <lite-youtube
                videoid="yaED_rElGgU"
                playlabel="Escudo Ciudadano"
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                class=""
              />
        </section>
        <section class="com__section com__section--text">
          <h1 class="animate ">Otro Historia 3</h1>
          <lite-youtube
                videoid="l0dDjW70Vuk"
                playlabel="Escudo Ciudadano"
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                class=""
              />
        </section>
      </div>
      <nav class="com__nav">
        <ul class="com__nav-list">
          <li class="com__nav-item">
            <a class="com__nav-link" @click="activeSection(1)">
              <span class="animate scaleInLeft delay-2">ESCUDO CIUDADADO</span>
              <span class="animate scaleInLeft delay-4">Lorem Ipsum</span>
            </a>
          </li>
          <li class="com__nav-item">
            <a class="com__nav-link flex-row" @click="activeSection(2)">
              <div class="com__section-half">
                <span class="blue-line animate scaleInLeft delay-3"></span>
                <span class="white-line animate scaleInLeft delay-4"></span>
              </div>
              <div class="com__section-half">
                <span class="white-circle animate slideInRight delay-5"></span>
              </div>
            </a>
          </li>
          <li class="com__nav-item">
            <a  class="com__nav-link centered" @click="activeSection(3)">
              <span class="blue-line animate scaleIn delay-3"></span>
              <span class="white-circle animate scaleIn delay-5"></span>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mounted } from 'vue';

export default {
  data() {
    return {
      section:null,
      activeSec:0,
      link:null
    }
  },
  mounted() {
    this.section = document.querySelectorAll('.com__section');
    this.link = document.querySelectorAll('.com__nav-item');
    this.activeFirst();
  },
  methods: {
    activeSection(section) {
      this.section[this.activeSec].classList.remove('active');
      [].forEach.call(this.section[this.activeSec].children, function(child) {
        child.style.opacity = 0;
        child.style.transform = 'none';
      });
      this.section[section].classList.add('active');
      [].forEach.call(this.section[section].children, function(child) {
        child.style.opacity = 1;
        child.style.transform = 'none';
      });

      this.activeSec>0 ?this.link[this.activeSec-1].classList.remove('active') : null;
      this.link[section-1].classList.add('active');
      this.activeSec = section;
    },
    activeFirst() {

      this.section[0].classList.add('active');
      [].forEach.call(this.section[0].children, function(child) {
        child.style.opacity = 1;
        child.style.transform = 'none';
      });
      this.activeSec = 0;
      //this.link[0].classList.add('active');

    }
  }
};
</script>

<style lang="scss" scoped>
.com {
	display: flex;
	align-items: stretch;
	height: 100vh;
	overflow: hidden;

	&__content {
		position: relative;
		flex: 8;
		background: var(--bg-orange);
    color: #fff;
		padding: 10vh 10vw;
	}

	&__section {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0 10%;
		opacity: 0;
		visibility: hidden;
		transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);;

		&.active {
			opacity: 1;
			visibility: visible;
		}

		&-half {
			flex: 1;
			height: 100vh;
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
		}

		&--text {

			h1 {
				margin-bottom: 3vh;
				font-size: 48px;
				font-weight: 300;
				color: rgba(white, 0.9);
			}

			p {
				margin: 0;
				color: rgba(white, 0.9);
				max-width: 600px;
				font-size: 20px;
			}

			img {
				max-width: 250px;
				margin: 0 auto;
			}

			&.centered {
				text-align: center;
			}
		}

		&--text-img {
			display: flex;
			flex-flow: row wrap;
		}
	}

	&__nav {
		width: 90px;
	}

	&__nav-list {
		margin: 0;
		padding: 0;
		list-style-type: none;

		display: flex;
		flex-flow: column wrap;
		height: 100vh;
		overflow: visible;
	}

	&__nav-item {
		flex: 1;
		position: relative;
		overflow: visible;
		border-bottom: 7px solid #fff;
		background: var(--bg-blue-full);
		transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);;

		&.active {
			background: rgba(#20232A, 1);
		}

		&:last-child {
			border-bottom: none;
		}

		&:hover {
			flex: 2;

			.com__nav-link {
				transform: scaleX(1);
			}


		}
	}

	&__nav-link {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		padding: 0 20%;
		position: absolute;
		width: 280%;
		height: 100%;
		left: calc(-280% + 90px);
		background: rgba(#20232A, 0.75);
		transform: scaleX(0);
		transform-origin: right center;
		transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);

		&.flex-row {
			flex-flow: row wrap;
		}

		&.centered {
			align-items: center;
		}

		.com__section-half {
			height: auto;

			&:nth-child(2) {
				align-items: center;
			}
		}
	}
}


/* animation classes */


@for $i from 1 through 5 {
	.delay-#{$i} {
		transition-delay: $i * .05s;
	}
}

.animate {
	transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
}

.slideInLeft {
	transform: translate3d(-100%, 0, 0);

}

.slideInRight {
	transform: translate3d(100%, 0, 0);

}

.scaleIn {
	transform: scale(0);
}

.scaleInLeft {
	transform: scaleX(0);
	transform-origin: left center;
}


</style>
