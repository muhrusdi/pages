export const value1 = {
  html: `
<div class="section">
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi libero expedita aliquid ratione temporibus sint eaque nam, qui ea nisi deleniti unde rem quidem soluta ut numquam reprehenderit provident.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ut, eos magni officia ipsum repellat dolores dignissimos cum reiciendis sapiente corporis alias et obcaecati voluptatem est. Ratione, sit error?</p>
  </div>
</div>
  `,
  css: `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.section {
  background: #fff;
  max-width: 200px;
  max-height: 200px;
  overflow-x: scroll;
}
.section::-webkit-scrollbar {
  width: 16px;
}

.section::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.section::-webkit-scrollbar-thumb {
  background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}

.section div {
  padding: 10px;
}
  `,
  javascript: ``,
}

export const value2 = {
  html: `
<div class="section">
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi libero expedita aliquid ratione temporibus sint eaque nam, qui ea nisi deleniti unde rem quidem soluta ut numquam reprehenderit provident.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ut, eos magni officia ipsum repellat dolores dignissimos cum reiciendis sapiente corporis alias et obcaecati voluptatem est. Ratione, sit error?</p>
  </div>
</div>
  `,
  css: `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.section {
  background: #fff;
  max-width: 200px;
  max-height: 200px;
  overflow-x: scroll;
}
.section::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}

.section::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.section::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
                     left bottom,
                     left top,
                     color-stop(0.44, rgb(122,153,217)),
                     color-stop(0.72, rgb(73,125,189)),
                     color-stop(0.86, rgb(28,58,148)));
}

.section div {
  padding: 10px;
}
  `,
  javascript: ``,
}

export const value3 = {
  html: `
<div class="section">
  <div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quasi libero expedita aliquid ratione temporibus sint eaque nam, qui ea nisi deleniti unde rem quidem soluta ut numquam reprehenderit provident.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi ut, eos magni officia ipsum repellat dolores dignissimos cum reiciendis sapiente corporis alias et obcaecati voluptatem est. Ratione, sit error?</p>
  </div>
</div>
  `,
  css: `
body {
  background: #97a2a9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
}

.section {
  background: #fff;
  max-width: 200px;
  max-height: 200px;
  overflow-x: scroll;
}
.section::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}

.section::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}

.section::-webkit-scrollbar-thumb {
  background-color: #F90; 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
}

.section div {
  padding: 10px;
}
  `,
  javascript: ``,
}
