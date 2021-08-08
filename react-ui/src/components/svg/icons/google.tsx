/**
* @name Google
* @since  Aug-8-21
* @version 1.0.0
* @author Matthew Day <matt@matthewday.net>
* @property {React.SVGProps<SVGSVGElement>}
*
* @returns {JSX.Element} SVG facebook icon
*/
const Google = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      height={410}
      width={410}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410 410"
      {...props}
    >
    <defs>
        <path d="M378.12985,0 C388.624839,0 397.188767,8.10501508 397.945622,18.3871094 L398,19.87015 L398,378.12985 C398,388.624839 389.894985,397.188767 379.612891,397.945622 L378.12985,398 L19.87015,398 C9.37516136,398 0.811233368,389.894985 0.0543783199,379.612891 L0,378.12985 L0,19.87015 C0,9.37516136 8.10501508,0.811233368 18.3871094,0.0543783199 L19.87015,0 L378.12985,0 Z" id="path-1"></path>
        <path d="M369.056237,0 C374.094372,0 378.34993,3.83549221 378.932162,8.78342459 L379,9.94376316 L379,369.056237 C379,374.094372 375.164508,378.34993 370.216575,378.932162 L369.056237,379 L9.94376316,379 C4.90562782,379 0.650070489,375.164508 0.0678384993,370.216575 L0,369.056237 L0,9.94376316 C0,4.90562782 3.83549221,0.650070489 8.78342459,0.0678384993 L9.94376316,0 L369.056237,0 Z" id="path-3"></path>
        <path d="M85.3486111,0 C86.4260417,5.92064806 87,12.0825449 87,18.5057947 C87,44.9007608 77.9186548,67.3075824 62.0779342,82.9924879 L59.9736111,85 L30.6916667,85 L30.6916667,62.2924551 C39.6024058,56.3373429 45.7434825,47.6520265 48.2603078,37.3874014 L48.7763889,34.9911306 L0,34.9911306 L0,0 L85.3486111,0 Z" id="path-5"></path>
        <path d="M29.857347,0 C36.8872777,21.5909465 56.5869705,37.659808 79.8612044,37.659808 C90.8835333,37.659808 100.404059,34.9388756 108.078617,30.2632503 L110.125652,28.940192 L139,51.8710562 C124.215301,65.8183813 103.989356,74 79.8612044,74 C45.9573835,74 16.4872613,54.7123136 1.33752367,26.2814123 L0,23.6718793 L0,0 L29.857347,0 Z" id="path-7"></path>
        <path d="M40,0 L40,23.3661554 C38.1836529,28.7768431 37.1543895,34.5582632 37.1543895,40.5 C37.1543895,45.4514473 37.8691557,50.2915636 39.158538,54.8985805 L40,57.6338446 L9.65691221,81 C3.51160444,68.8259525 0,55.0487382 0,40.5 C0,27.1636566 2.95072318,14.4756077 8.17596213,3.07642991 L9.65691221,0 L40,0 Z" id="path-9"></path>
        <path d="M79.4864557,0 C102.32017,0 121.666931,8.21278489 136.766944,21.727139 L139,23.79369 L113.482901,49.9931413 C104.272236,40.9486968 92.541486,36.340192 79.4864557,36.340192 C57.0936035,36.340192 38.0252874,51.3556504 30.4586347,71.8597029 L29.7172414,74 L0,50.3281207 C14.6362602,20.4743484 44.719161,0 79.4864557,0 Z" id="path-11"></path>
    </defs>
    <g id="12.9″-iPad-Pro-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="google" transform="translate(-24.000000, -14.000000)">
          <image id="Image-1" x="0" y="0" width="438" height="438" xlinkHref="data:image/png;base64,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"></image>
          <g id="Group-4" transform="translate(30.000000, 20.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
            <g id="Clip-3"></g>
            <polygon id="Fill-2" fill="#4285F4" mask="url(#mask-2)" points="-0.597 398 398.199 398 398.199 -0.796 -0.597 -0.796"></polygon>
          </g>
          <g id="Group-7" transform="translate(39.000000, 29.000000)">
            <mask id="mask-4" fill="white">
              <use xlinkHref="#path-3"></use>
            </mask>
            <g id="Clip-6"></g>
            <polygon id="Fill-5" fill="#FFFFFF" mask="url(#mask-4)" points="-0.997368421 379.398947 379.598421 379.398947 379.598421 0 -0.997368421 0"></polygon>
          </g>
          <g id="Group-10" transform="translate(228.000000, 202.000000)">
            <mask id="mask-6" fill="white">
              <use xlinkHref="#path-5"></use>
            </mask>
            <g id="Clip-9"></g>
            <polygon id="Fill-8" fill="#4285F4" mask="url(#mask-6)" points="-0.201388889 86.0052034 88.0069444 86.0052034 88.0069444 -0.844370861 -0.201388889 -0.844370861"></polygon>
          </g>
          <g id="Group-13" transform="translate(150.000000, 235.000000)">
            <mask id="mask-8" fill="white">
              <use xlinkHref="#path-7"></use>
            </mask>
            <g id="Clip-12"></g>
            <polygon id="Fill-11" fill="#34A853" mask="url(#mask-8)" points="-0.168797771 74.8120713 139.238303 74.8120713 139.238303 -0.710562414 -0.168797771 -0.710562414"></polygon>
          </g>
          <g id="Group-16" transform="translate(139.000000, 179.000000)">
            <mask id="mask-10" fill="white">
              <use xlinkHref="#path-9"></use>
            </mask>
            <g id="Clip-15"></g>
            <polygon id="Fill-14" fill="#FBBC05" mask="url(#mask-10)" points="-0.201816347 82.1823355 40.9687185 82.1823355 40.9687185 -0.78154379 -0.201816347 -0.78154379"></polygon>
          </g>
          <g id="Group-19" transform="translate(150.000000, 129.000000)">
            <mask id="mask-12" fill="white">
              <use xlinkHref="#path-11"></use>
            </mask>
            <g id="Clip-18"></g>
            <polygon id="Fill-17" fill="#EA4335" mask="url(#mask-12)" points="-0.168005688 75.1165981 139.77085 75.1165981 139.77085 -0.406035665 -0.168005688 -0.406035665"></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Google;
