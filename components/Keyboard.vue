<template>
  <div class="keyboard">
    <div data-note="c4" data-key="81" class="key white oct">q</div>
    <div data-note="db4" data-key="50" class="key black black1 oct">2</div>
    <div data-note="d4" data-key="87" class="key white oct">w</div>
    <div data-note="eb4" data-key="51" class="key black black2 oct">3</div>
    <div data-note="e4" data-key="69" class="key white oct">e</div>
    <div data-note="f4" data-key="82" class="key white oct">r</div>
    <div data-note="gb4" data-key="53" class="key black black3 oct">5</div>
    <div data-note="g4" data-key="84" class="key white oct">t</div>
    <div data-note="ab4" data-key="54" class="key black black4 oct">6</div>
    <div data-note="a4" data-key="89" class="key white oct">y</div>
    <div data-note="bb4" data-key="55" class="key black black5 oct">7</div>
    <div data-note="b4" data-key="85" class="key white oct">u</div>
    <div data-note="c5" data-key="88" class="key white">x</div>
    <div data-note="db5" data-key="68" class="key black black6">d</div>
    <div data-note="d5" data-key="67" class="key white">c</div>
    <div data-note="eb5" data-key="70" class="key black black7">f</div>
    <div data-note="e5" data-key="86" class="key white">v</div>
    <div data-note="f5" data-key="66" class="key white">b</div>
    <div data-note="gb5" data-key="72" class="key black black8">h</div>
    <div data-note="g5" data-key="78" class="key white">n</div>
    <div data-note="ab5" data-key="74" class="key black black9">j</div>
    <div data-note="a5" data-key="77" class="key white">m</div>
    <div data-note="bb5" data-key="75" class="key black black10">k</div>
    <div data-note="b5" data-key="188" class="key white">,</div>
    <div data-note="c6" data-key="190" class="key white">.</div>
  </div>
</template>

<style lang="postcss" scoped>
.keyboard {
  width: 95%;
  height: 160px;
  display: flex;
  margin: 10px auto 10px;
  position: relative;
}

.key {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 2rem;
  border-radius: 5px;
  border: 2px solid black;
  font-family: sans-serif;
}

.white {
  height: 100%;
  width: 12.5%;
  background-color: ivory;
  box-shadow: 2px 7px 2px #222222;
}

.black {
  height: 70%;
  width: 3%;
  position: absolute;
  z-index: 2;
  margin-left: -1.6%;
  background-color: black;
  color: white;
  @media (max-width: 600px) {
    width: 6%;
  }
}


  .played {
    background-color: #333333;
    transform: translate(0, 2px);
  }
  .black1 {
    left: 6.7%;
  }
  .black2 {
    left: 13.3%;
  }
  .black3 {
    left: 26.7%;
  }
  .black4 {
    left: 33.4%;
  }
  .black5 {
    left: 40%;
  }
  .black6 {
    left: 53.3%;
    @media (max-width: 600px) {
      left: 11%;
    }
  }
  .black7 {
    left: 60%;
    @media (max-width: 600px) {
      left: 23%;
    }
  }
  .black8 {
    left: 73.3%;
    @media (max-width: 600px) {
      left: 48.5%;
    }
  }
  .black9 {
    left: 80%;
    @media (max-width: 600px) {
      left: 61%;
    }
  }
  .black10 {
    left: 86.7%;
    @media (max-width: 600px) {
      left: 73%;
    }
  }

.oct {
  @media (max-width: 600px) {
    display: none;
  }
}
</style>
