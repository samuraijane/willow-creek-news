/**
* @name Twitter
* @since  Sep-25-21
* @version 1.0.0
* @author Matthew Day <matt@matthewday.net>
* @property {React.SVGProps<SVGSVGElement>}
*
* @returns {JSX.Element} SVG logo icon
*/
const Logo = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      height={360}
      width={360}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 360"
      {...props}
    >
      <g id="iPhone-8" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(30.000000, 102.000000)" fill="#282A91" font-family="OpenSans-SemiBold, Open Sans" font-weight="500">
          <text id="WILLOW-CREEK" font-size="38">
            <tspan x="10.4736328" y="41">WILLOW CREEK</tspan>
          </text>
          <text id="NEWS" font-size="104">
            <tspan x="0.9609375" y="125">NEWS</tspan>
          </text>
        </g>
        <rect id="Rectangle" fill="#B61414" x="30" y="65" width="296" height="14"></rect>
        <rect id="Rectangle-Copy" fill="#B61414" x="30" y="280" width="296" height="14"></rect>
      </g>
    </svg>
  );
}

export default Logo;