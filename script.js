var valuee;
$(document).ready(function () {
  $("button").click(function () {
    valuee = $("input").val();
    $(".row").html("");
    $(".row").append(`<div id="12" class="col-12">
    <img src="loa.gif" style="width: 50px; height: 50px" />
  </div>`);
    $.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${valuee}`,
      function (data) {
        console.log(data);
        if (valuee == "") {
          $(".col-12").html("");
          $(".row").html("");
          $(".row").append(
            `<div class="fs-3 text-danger">Please Enter Valid Search Term<div/>`
          );
        } else if (data.query.searchinfo.totalhits == 0) {
          $(".col-12").html("");
          $(".row").html("");
          $(".row").append(
            `<div class="fs-3 text-danger">No Matching Results. Please Try Again.<div/>`
          );
        } else {
          $(".col-12").html("");
          for (let i = 0; i < 20; i++) {
            text = `
            <div id="${data.query.search[i].pageid}" onclick="blank(id)"
          class="col-3 p-2 text-start rounded m-3 alll"
          style="width: 400px; height: 300px"
        >
          <h3 class="p-3">${data.query.search[i].title}</h3>
          <p class="px-3" style="color:#888">
          ${data.query.search[i].snippet}
          </p>
        </div>
            `;

            $(".row").append(text);
          }
        }
      }
    );
  });
});

function blank(idd) {
  window.open(`https://en.wikipedia.org/?curid=${idd} `, "_blank");
}
