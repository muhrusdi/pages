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
  background: #ddd;
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
  javascript: ``
}