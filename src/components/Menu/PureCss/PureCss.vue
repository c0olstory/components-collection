<template>
  <nav class="nav" style="transform: scale(0.5) translateX(-100%);">
    <input type="checkbox" class="nav__cb" id="menu-cb"/>
    <div class="nav__content">
      <ul class="nav__items">
        <li class="nav__item">
          <span class="nav__item-text">
            Home
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            Works
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            About
          </span>
        </li>
        <li class="nav__item">
          <span class="nav__item-text">
            Contact
          </span>
        </li>
      </ul>
    </div>
    <label class="nav__btn" for="menu-cb"></label>
  </nav>
</template>

<script>
export default {
  props: ['scale']
}
</script>

<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

$lightBlue: darken(#EAFBFF, 50%);
$darkBlue: #208FF9;

body {
  &:before,
  &:after {
    content: "";
    display: block;
    height: 50%;
    background: $lightBlue;
  }

  &:after {
    background: $darkBlue;
  }
}

/* MAIN VARIABLES FOR CUSTOMIZATION */
$numOfItems: 4;
$navAT: 1s;
$textDelayStep: 0.1s;
/* -------------------------------- */

$font: Helvetica, Arial, sans-serif;

$btnSize: 90px;
$lineW: 28px;
$lineH: 4px;
$linesGap: 10px;
$linesTotalH: $lineH*2 + $linesGap;
$btnHorPad: calc(($btnSize - $lineW) / 2);
$btnVertPad: calc(($btnSize - $linesTotalH) / 2);


$itemsLeftPad: 20px;
$itemsRightPad: $itemsLeftPad + $btnSize;
$itemWidth: 70px;
$navItemsWidth: $itemsLeftPad + $itemsRightPad + $itemWidth * $numOfItems;

$textAT: $navAT - $textDelayStep * ($numOfItems - 1);
$textFadeAT: 0.2s;
$cub: cubic-bezier(.48,.43,.29,1.3);
$backCub: cubic-bezier(0.49,-0.3,.68,1.23);
$textCub: cubic-bezier(.48,.43,.7,2.5);

.nav {
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: auto;
  height: $btnSize;
  margin-top: calc($btnSize/-2);
  background: #fff;
  border-radius: 5px;
  transform: translate3d(-50%,0,0);
  box-shadow: 0 10px 35px rgba(0,0,0,0.2);

  &__cb {
    z-index: -1000;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
  }

  &__content {
    position: relative;
    width: $btnSize;
    height: 100%;
    transition: width $navAT $backCub;

    .nav__cb:checked ~ & {
      transition: width $navAT $cub;
      width: $navItemsWidth;
    }
  }

  &__items {
    position: relative;
    width: $navItemsWidth;
    height: 100%;
    padding-left: $itemsLeftPad;
    padding-right: $itemsRightPad;
    list-style-type: none;
    font-size: 0;
  }

  &__item {
    display: inline-block;
    vertical-align: top;
    width: $itemWidth;
    text-align: center;
    color: #6C7784;
    font-size: 14px;
    line-height: $btnSize;
    font-family: $font;
    font-weight: bold;
    perspective: 1000px;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: $lightBlue;
    }

    &-text {
      display: block;
      height: 100%;
      transform: rotateY(-70deg);
      opacity: 0;
      transition: transform $textAT $textCub, opacity $textAT;

      .nav__cb:checked ~ .nav__content & {
        transform: rotateY(0);
        opacity: 1;
        transition: transform $textAT $textCub, opacity $textFadeAT;
      }

      @for $i from 1 through $numOfItems {
        .nav__item:nth-child(#{$i}) & {
          transition-delay: ($numOfItems - $i) * $textDelayStep;
        }

        .nav__cb:checked ~ .nav__content .nav__item:nth-child(#{$i}) & {
          transition-delay: ($i - 1) * $textDelayStep;
        }
      }
    }
  }

  &__btn {
    position: absolute;
    right: 0;
    top: 0;
    width: $btnSize;
    height: $btnSize;
    padding: $btnVertPad $btnHorPad;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      display: block;
      width: $lineW;
      height: $lineH;
      border-radius: 2px;
      background: #096DD3;
      transform-origin: 50% 50%;
      transition: transform $navAT $cub, background-color 0.3s;
    }

    &:before {
      margin-bottom: $linesGap;
    }

    &:hover {
      &:before,
      &:after {
        background: $lightBlue;
      }
    }

    .nav__cb:checked ~ & {

      &:before {
        transform: translateY(calc($linesGap/2) + calc($lineH/2)) rotate(-225deg);
      }

      &:after {
        transform: translateY(calc($linesGap/-2) + calc($lineH/-2)) rotate(225deg);
      }
    }
  }
}
</style>