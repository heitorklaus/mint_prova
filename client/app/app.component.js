import template from './app.html';
import './app.scss';

let appComponent = {
  template: template,
  controller: function AppCtrl() {
    var $ctrl = this;

    // metodo interno de inicializacao do QUILL
    // tiro da INDEX.HTML
    // e inicio no ciclo de vida do ANGULAR
     
    $ctrl.$onInit = () => {
      let titleEditor = new Quill(
        "#title-editor",
        {
          modules: {
            toolbar: "#title-toolbar"
          },
          theme: "snow"
        }
      );
  
      titleEditor.on("selection-change", function (range, oldRange, source) {
        if (range || (oldRange && oldRange.length > 0)) {
          $("#title-toolbar-container").removeClass("hidden");
          return;
        }
        $("#title-toolbar-container").addClass("hidden");
      });
  
      // Inicializacao editor e toolbar do footer
      let footerEditor = new Quill(
        "#footer-editor",
        {
          modules: {
            toolbar: "#footer-toolbar"
          },
          theme: "snow"
        }
      );
  
      footerEditor.on("selection-change", function (range, oldRange, source) {
        if (range || (oldRange && oldRange.length > 0)) {
          $("#footer-toolbar-container").removeClass("hidden");
          return;
        }
        $("#footer-toolbar-container").addClass("hidden");
      });

      $('.img-grid').click(function () {
        var value = $(this).attr("src");
        $('#exampleModal').modal('hide');
  
        var targetImageId = '#' + $("#exampleModal").attr("img_target");
        console.log("[ INFO ] targetImageId: ", targetImageId);
        $(targetImageId).attr("src", value);
      });
  
      $('.imgContainer').click(function () {
        $('#exampleModal').modal('show');
        $('#exampleModal').attr("img_target", $(this).attr("id"));
        console.log("[ INFO ] img_target: ", $(this).attr("id"));
      });
    };
  }
};

export default appComponent;
