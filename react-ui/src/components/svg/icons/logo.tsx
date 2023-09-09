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
      <g id="wcnews-logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" transform="translate(30.000000, 102.000000)" fill="#282A91" fontFamily="OpenSans-SemiBold, Open Sans" fontWeight="500">
          <text id="WILLOW-CREEK" fontSize="38">
            <tspan x="10.4736328" y="41">WILLOW CREEK</tspan>
          </text>
          <text id="NEWS" fontSize="104">
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