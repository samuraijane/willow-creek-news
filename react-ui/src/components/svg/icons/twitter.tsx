/**
* @name Twitter
* @since  Aug-8-21
* @version 1.0.0
* @author Matthew Day <matt@matthewday.net>
* @property {React.SVGProps<SVGSVGElement>}
*
* @returns {JSX.Element} SVG avatar icon
*/
const Twitter = (
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
      <g id="twitter" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="paths" transform="translate(5.000000, 5.000000)" fillRule="nonzero">
          <g id="Dark_Blue" fill="#1D9BF0">
            <rect id="Rectangle" x="0" y="0" width="400" height="400"></rect>
          </g>
          <g id="Logo__x2014__FIXED" transform="translate(75.100000, 98.400000)" fill="#FFFFFF">
            <path d="M78.5,203.2 C172.8,203.2 224.4,125 224.4,57.3 C224.4,55.1 224.4,52.9 224.3,50.7 C234.3,43.5 243,34.4 249.9,24.1 C240.7,28.2 230.8,30.9 220.4,32.2 C231,25.9 239.1,15.8 243,3.8 C233.1,9.7 222.1,13.9 210.4,16.2 C201,6.2 187.7,2.84217094e-14 173,2.84217094e-14 C144.7,2.84217094e-14 121.7,23 121.7,51.3 C121.7,55.3 122.2,59.2 123,63 C80.4,60.9 42.6,40.4 17.3,9.4 C12.9,17 10.4,25.8 10.4,35.2 C10.4,53 19.5,68.7 33.2,77.9 C24.8,77.6 16.9,75.3 10,71.5 C10,71.7 10,71.9 10,72.2 C10,97 27.7,117.8 51.1,122.5 C46.8,123.7 42.3,124.3 37.6,124.3 C34.3,124.3 31.1,124 28,123.4 C34.5,143.8 53.5,158.6 75.9,159 C58.3,172.8 36.2,181 12.2,181 C8.1,181 4,180.8 0,180.3 C22.6,194.7 49.6,203.2 78.5,203.2" id="Path"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Twitter;
