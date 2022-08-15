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
          <div class="com__section-half">
            <h1 class="animate slideInLeft">Communication Design</h1>
            <p class="animate slideInLeft delay-2">
              Communication design is a mixed discipline between design and
              information-development which is concerned with how media
              intermission such as printed, crafted, electronic media or
              presentations communicate with people.
            </p>
          </div>
          <div class="com__section-half">
            <img
              class="animate slideInRight delay-3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg"
              alt=""
            />
          </div>
        </section>
        <section class="com__section com__section--text centered">
          <h1 class="animate scaleIn">Communication Design</h1>
          <img
            class="animate scaleIn delay-3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg"
            alt=""
          />
        </section>
        <section class="com__section com__section--text">
          <h1 class="animate slideInLeft">Communication Design</h1>
          <p class="animate slideInLeft delay-3">
            Communication design is a mixed discipline between design and
            information-development which is concerned with how media
            intermission such as printed, crafted, electronic media or
            presentations communicate with people.
          </p>
        </section>
        <section class="com__section com__section--text com__section--text-img">
          <div class="com__section-half">
            <h1 class="animate slideInLeft">Communication Design</h1>
            <p class="animate slideInLeft delay-2">
              Communication design is a mixed discipline between design and
              information-development which is concerned with how media
              intermission such as printed, crafted, electronic media or
              presentations communicate with people.
            </p>
          </div>
          <div class="com__section-half">
            <img
              class="animate slideInRight delay-3"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg"
              alt=""
            />
          </div>
        </section>
        <section class="com__section com__section--text centered">
          <h1 class="animate scaleIn">Communication Design</h1>
          <img
            class="animate scaleIn delay-3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg"
            alt=""
          />
        </section>
        <section class="com__section com__section--text">
          <h1 class="animate slideInLeft">Communication Design</h1>
          <p class="animate slideInLeft delay-3">
            Communication design is a mixed discipline between design and
            information-development which is concerned with how media
            intermission such as printed, crafted, electronic media or
            presentations communicate with people.
          </p>
        </section>
      </div>
      <nav class="com__nav">
        <ul class="com__nav-list">
          <li class="com__nav-item">
            <a href="" class="com__nav-link">
              <span class="animate scaleInLeft delay-2">CONOCE A LA AMEXID</span>
              <span class="animate scaleInLeft delay-4">Agencia Mexicana de coperación internacional</span>

            </a>
          </li>
          <li class="com__nav-item">
            <a href="" class="com__nav-link flex-row">
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
            <a href="" class="com__nav-link centered">
              <span class="blue-line animate scaleIn delay-3"></span>
              <span class="white-circle animate scaleIn delay-5"></span>
            </a>
          </li>
          <li class="com__nav-item">
            <a href="" class="com__nav-link">
              <span class="blue-line animate scaleInLeft delay-2"></span>
              <span class="white-line animate scaleInLeft delay-4"></span>
              <span class="white-line animate scaleInLeft delay-5"></span>
            </a>
          </li>
          <li class="com__nav-item">
            <a href="" class="com__nav-link flex-row">
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
            <a href="" class="com__nav-link centered">
              <span class="blue-line animate scaleIn delay-3"></span>
              <span class="white-circle animate scaleIn delay-5"></span>
            </a>
          </li>
          <li class="com__nav-item">
            <a href="" class="com__nav-link">
              <span class="blue-line animate scaleInLeft delay-2"></span>
              <span class="white-line animate scaleInLeft delay-4"></span>
              <span class="white-line animate scaleInLeft delay-5"></span>
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
      this.section = section;
      this.section.addClass('active');
      this.section.find('*').css({
        transform: 'none',
        opacity: 1
      });
      this.section.find('.com__nav-link').addClass('active');
    },
    activeFirst() {

      this.section[0].classList.add('active');
      [].forEach.call(this.section[0].children, function(child) {
        child.style.opacity = 1;
        child.style.transform = 'none';
      });

      this.link[0].classList.add('active');

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

			.blue-line,
			.white-line,
			.white-circle {
				transform: none;
				opacity: 1;
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
	opacity: 0;
}

.slideInRight {
	transform: translate3d(100%, 0, 0);
	opacity: 0;
}

.scaleIn {
	transform: scale(0);
}

.scaleInLeft {
	transform: scaleX(0);
	transform-origin: left center;
}


</style>
