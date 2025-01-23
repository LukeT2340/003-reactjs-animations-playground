import { useEffect } from "react"
import { preloadImages } from "./utils"
import gsap from "gsap"
import { ScrollTrigger, Flip } from "gsap/all"
import "./styles.css"

const OneElementScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip) // Register GSAP's ScrollTrigger and Flip plugins

    // Select the element that will be animated with Flip and its parent
    const oneElement = document.querySelector(".one")
    const parentElement = oneElement.parentNode

    // Select all elements with a `data-step` attribute for the Flip animation steps
    const stepElements = [...document.querySelectorAll("[data-step]")]

    let flipCtx // Variable to store the Flip animation context

    // Function to create a Flip animation tied to scroll events
    const createFlipOnScrollAnimation = () => {
      // Revert any previous animation context
      flipCtx && flipCtx.revert()

      flipCtx = gsap.context(() => {
        const flipConfig = {
          duration: 1, // Duration of each Flip animation
          ease: "sine.inOut", // Easing for smooth transitions
        }

        // Store Flip states for each step element
        const states = stepElements.map((stepElement) =>
          Flip.getState(stepElement)
        )

        // Create a GSAP timeline with ScrollTrigger for the Flip animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: parentElement, // Trigger animation based on the parent element
            start: "clamp(center center)", // Start animation when parent is in the center of the viewport
            endTrigger: stepElements[stepElements.length - 1], // End at the last step element
            end: "clamp(center center)", // End animation when the last step is centered
            scrub: true, // Synchronize animation with scroll
            immediateRender: false,
          },
        })

        // Add Flip animations to the timeline for each state
        states.forEach((state, index) => {
          const customFlipConfig = {
            ...flipConfig,
            ease: index === 0 ? "none" : flipConfig.ease, // Use 'none' easing for the first step
          }
          tl.add(
            Flip.fit(oneElement, state, customFlipConfig),
            index ? "+=0.5" : 0
          )
        })
      })
    }

    // Animate spans within `.content__title` elements on scroll
    const animateSpansOnScroll = () => {
      const spans = document.querySelectorAll(".content__title > span") // Select all spans

      spans.forEach((span, index) => {
        const direction = index % 2 === 0 ? -150 : 150 // Alternate direction for animation

        // Determine the scroll trigger dynamically based on the parent section
        const triggerElement = span.closest(".content--center")
          ? span.parentNode
          : span

        gsap.from(span, {
          x: direction, // Animate from the left or right
          duration: 1,
          ease: "sine", // Smooth easing
          scrollTrigger: {
            trigger: triggerElement, // Trigger element
            start: "top bottom", // Start animation when element enters viewport
            end: "+=45%", // End animation after 45% of the viewport
            scrub: true, // Synchronize with scroll
          },
        })
      })
    }

    // Animate specific images on scroll
    const animateImagesOnScroll = () => {
      const images = document.querySelectorAll(
        ".content--lines .content__img:not([data-step]), .content--grid .content__img:not([data-step])"
      )

      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 0, // Start small
            autoAlpha: 0, // Start transparent
            filter: "brightness(180%) saturate(0%)", // Start desaturated and bright
          },
          {
            scale: 1, // Scale to full size
            autoAlpha: 1, // Fade in
            filter: "brightness(100%) saturate(100%)", // Restore normal brightness and saturation
            duration: 1,
            ease: "sine", // Smooth easing
            scrollTrigger: {
              trigger: image,
              start: "top bottom", // Start animation when element enters viewport
              end: "+=45%", // End animation after 45% of the viewport
              scrub: true,
            },
          }
        )
      })
    }

    // Add a parallax effect to `.content__text` elements
    const addParallaxToText = () => {
      const firstTextElement = document.querySelector(".content__text") // Select the first text element
      if (!firstTextElement) return // Exit if no element is found

      gsap.fromTo(
        firstTextElement,
        {
          y: 250, // Start below its original position
        },
        {
          y: -250, // Move above its original position
          ease: "sine", // Smooth easing
          scrollTrigger: {
            trigger: firstTextElement,
            start: "top bottom", // Start when top of element enters viewport
            end: "top top", // End when top of element reaches top of viewport
            scrub: true, // Synchronize with scroll
          },
        }
      )
    }

    // Animate the filter effect on the `.one` element during the first scroll
    const animateFilterOnFirstSwitch = () => {
      gsap.fromTo(
        oneElement,
        {
          filter: "brightness(80%)", // Start with high brightness and reduced saturation
        },
        {
          filter: "brightness(100%)", // Transition to normal state
          ease: "sine", // Smooth easing
          scrollTrigger: {
            trigger: parentElement,
            start: "clamp(top bottom)", // Start when parent enters viewport
            end: "clamp(bottom top)", // End when parent leaves viewport
            scrub: true,
          },
        }
      )
    }

    // Add a parallax effect to images in the `.content--column` section
    const addParallaxToColumnImages = () => {
      const columnImages = [
        ...document.querySelectorAll(
          ".content--column .content__img:not([data-step])"
        ),
      ]
      const totalImages = columnImages.length
      const middleIndex = (totalImages - 1) / 2 // Calculate the virtual center index for symmetry

      columnImages.forEach((image, index) => {
        const intensity = Math.abs(index - middleIndex) * 75 // Calculate intensity based on distance from center

        gsap.fromTo(
          image,
          {
            y: intensity, // Start with offset based on intensity
          },
          {
            y: -intensity, // Move in the opposite direction
            ease: "sine", // Smooth easing
            scrollTrigger: {
              trigger: image,
              start: "top bottom", // Start when top of element enters viewport
              end: "bottom top", // End when bottom of element leaves viewport
              scrub: true,
            },
          }
        )
      })
    }

    const animateRelatedDemos = () => {
      const relatedSection = document.querySelector(".card-wrap")
      const relatedDemos = [
        ...relatedSection.querySelectorAll(".card-wrap > .card"),
      ]

      gsap.from(relatedDemos, {
        scale: 0,
        ease: "sine",
        stagger: {
          each: 0.04,
          from: "center",
        },
        scrollTrigger: {
          trigger: relatedSection,
          start: "top bottom",
          end: "clamp(center center)",
          scrub: true,
        },
      })
    }

    // Main initialization function
    const init = () => {
      createFlipOnScrollAnimation() // Initialize Flip animations
      animateSpansOnScroll() // Animate spans on scroll
      animateImagesOnScroll() // Animate images on scroll
      addParallaxToText() // Add parallax effect to text
      addParallaxToColumnImages() // Add parallax effect to column images
      animateFilterOnFirstSwitch() // Animate the filter on the `.one` element
      animateRelatedDemos() // Animate the related demos section
      window.addEventListener("resize", createFlipOnScrollAnimation) // Reinitialize Flip animations on resize
    }

    // Preload images and initialize animations after images have loaded
    preloadImages(".one__img").then(() => {
      document.body.classList.remove("loading") // Remove the 'loading' class from the body
      init() // Initialize animations
    })
  }, [])

  return (
    <>
      <div className='frame font-cap'>
        <h3 className='frame__title'>One Element Scroll</h3>
        <div className='frame-wrap'>
          <a
            className='frame__back'
            href='https://tympanus.net/codrops/?p=82884'
          >
            Article
          </a>
          <a
            className='frame__archive'
            href='https://tympanus.net/codrops/demos'
          >
            All demos
          </a>
          <a
            className='frame__github'
            href='https://github.com/codrops/OneElementScroll'
          >
            GitHub
          </a>
          <nav className='tags'>
            <a href='https://tympanus.net/codrops/demos/?tag=scroll'>#scroll</a>
            <a href='https://tympanus.net/codrops/demos/?tag=layout'>#layout</a>
          </nav>
        </div>
      </div>
      <section className='content content--inital'>
        <div
          className='one'
          style={{ backgroundImage: "url(/assets/images/common/img/main.jpg" }}
        ></div>
      </section>
      <section className='content content--center content--blend'>
        <div data-step className='content__img'></div>
        <h1 className='content__title font-alt'>
          <span>Seraph</span>
          <br />
          <span>Kamos</span>
        </h1>
      </section>
      <section className='content content--column'>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/1.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/2.jpg" }}
        ></div>
        <div data-step className='content__img content__img--mid'></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/3.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/4.jpg" }}
        ></div>
      </section>
      <section className='content content--lines'>
        <h2 className='content__title content__title--medium font-alt'>
          <span>Natural</span> <div data-step className='content__img'></div>
          <span>Garments</span>
        </h2>
        <h2 className='content__title content__title--medium font-alt'>
          <span>Crafted with</span>{" "}
          <div
            className='content__img'
            style={{ backgroundImage: "url(/assets/images/common/img/5.jpg" }}
          ></div>{" "}
          <span>love</span>{" "}
        </h2>
        <h2 className='content__title content__title--medium font-alt'>
          <span>with</span>{" "}
          <div
            className='content__img'
            style={{ backgroundImage: "url(/assets/images/common/img/4.jpg" }}
          ></div>{" "}
          <span>respect</span>
        </h2>
      </section>
      <section className='content content--sides'>
        <div data-step className='content__img'></div>
        <div className='content__text'>
          <p>
            <strong>Welcome to Seraph Kamos</strong> where time meets the
            eternal. We believe in crafting more than garments—we create
            connections. Connections to the earth, to human hands, and to the
            moments that matter. Our designs are born from natural fabrics, each
            fiber carrying the whispers of its origin: the rustle of flax in a
            summer breeze, the soft strength of organic cotton, the warmth of
            wool from sheep raised with care.
          </p>
        </div>
      </section>
      <section className='content content--center content--center-tall'>
        <div data-step className='content__img'></div>
        <div className='content__text content__text--large'>
          <p>
            We honor the hands that touch every thread, partnering with artisans
            and communities to ensure fairness, respect, and dignity at every
            step. No shortcuts, no exploitation—just honest, thoughtful
            craftsmanship. Every piece you wear carries a story, one rooted in
            sustainability, transparency, and timeless design.
          </p>
        </div>
      </section>
      <section className='content content--grid'>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/13.jpg" }}
        ></div>
        <div data-step className='content__img'></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/12.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/9.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/7.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/11.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/8.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/10.jpg" }}
        ></div>
        <div
          className='content__img'
          style={{ backgroundImage: "url(/assets/images/common/img/6.jpg" }}
        ></div>
      </section>
      <section className='outro'>
        <h2 className='outro__title font-alt'>More you might like</h2>
        <div className='card-wrap'>
          <div className='card'>
            <a
              href='https://tympanus.net/Development/Staggered3DGridAnimations/'
              className='card__img'
            ></a>
            <span className='card__title font-cap'>
              <a href='https://tympanus.net/Development/Staggered3DGridAnimations/'>
                Staggered (3D) Grid Animations with Scroll-Triggered Effects
              </a>
            </span>
          </div>
          <div className='card'>
            <a
              href='https://tympanus.net/Development/OnScrollLayoutFormations'
              className='card__img'
            ></a>
            <span className='card__title font-cap'>
              <a href='https://tympanus.net/Development/OnScrollLayoutFormations'>
                Exploration of On-Scroll Layout Formations
              </a>
            </span>
          </div>
          <div className='card'>
            <a
              href='https://tympanus.net/Development/OnScrollSVGFilterText'
              className='card__img'
            ></a>
            <span className='card__title font-cap'>
              <a href='https://tympanus.net/Development/OnScrollSVGFilterText'>
                Scroll-based SVG Filter Animations on Text
              </a>
            </span>
          </div>
          <div className='card'>
            <a
              href='https://tympanus.net/Development/TextClipScroll'
              className='card__img'
            ></a>
            <span className='card__title font-cap'>
              <a href='https://tympanus.net/Development/TextClipScroll'>
                Experimental On-Scroll Text Animations with SVG Clip-Path
              </a>
            </span>
          </div>
          <div className='card'>
            <a
              href='https://tympanus.net/Development/SlicedTextEffect'
              className='card__img'
            ></a>
            <span className='card__title font-cap'>
              <a href='https://tympanus.net/Development/SlicedTextEffect'>
                On-Scroll Sliced Text Animation
              </a>
            </span>
          </div>
        </div>
      </section>
      <p className='credits font-alt'>
        <a href='https://tympanus.net/codrops/demos'>Browse all demos</a>
      </p>
      <p className='credits font-alt'>
        Made by <a href='https://x.com/codrops'>@codrops</a>
      </p>
    </>
  )
}

export default OneElementScroll
