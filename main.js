(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.gazette = global.gazette || {})));
}(this, (function(exports) { 'use strict';

	if (typeof window === 'object') {
		// https://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml
		var setInnerHTML = function(elm, html) {
		  elm.innerHTML = html;
		  Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
		    const newScript = document.createElement("script");
		    Array.from(oldScript.attributes)
		      .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
		    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
		    oldScript.parentNode.replaceChild(newScript, oldScript);
		  });
		}

		window.document.addEventListener('DOMContentLoaded', () =>
			Array.from(document.querySelectorAll('script[data-gazette]')).forEach(e =>
				setInnerHTML(
					e.insertAdjacentElement('afterend', document.createElement('div')),
				`
<div class="ROCOGazette OLSKDecorModule">

<h2 class="ROCOGazetteHeading">Follow my journey</h2>

<p>Quarterly updates on projects, writing, music, links, and life, right in your inbox.</p>

<div class="ROCOBulletin">
  <script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js" data-button-color="#424242" data-button-text-color="#FFFFFF" data-site="https://utopia.rosano.ca/" data-locale="en" async></script>
</div>

<p class="OLSKFollow">Or more frequently on <a class="OLSKFollowMastodon" target="_blank" href="https://rosano.ca/mastodon">Mastodon</a>, <a class="OLSKFollowBluesky" target="_blank" href="https://rosano.ca/bluesky">Bluesky</a>, and <a href="https://rosano.ca/log">Journal</a>.

</div>`
				)));
	}

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
