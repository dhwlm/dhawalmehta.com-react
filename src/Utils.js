import $ from 'jquery';
import ScrollReveal from 'scrollreveal'

export const revealeffect = (interval) => {
  window.sr = ScrollReveal();
  var sequenceInterval = interval || 100;
  // Custom reveal sequencing by container
  $('.scroll-reveal__sequence-container').each(function() {
    var sequenceDelay = 0;
    $(this).find('.scroll-reveal--sequenced').each(function() {
      window.sr.reveal(this, {
        delay: sequenceDelay,
        duration:1000
      });
      sequenceDelay += sequenceInterval;
    });
  });
}
