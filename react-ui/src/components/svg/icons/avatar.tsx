/**
* @name Avatar
* @since  July-13-21
* @version 1.0.0
* @author Matthew Day <matt@matthewday.net>
* @property {React.SVGProps<SVGSVGElement>}
*
* @returns {JSX.Element} SVG avatar icon
*/
const Avatar = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
  return (
    <svg
      height={100}
      width={100}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
    >
      <path d="M61.6 63.8H38.4c-17.5 0-31.8 13.5-33.2 30.6-.1 1.2.8 2.2 2 2.2 1 0 1.9-.8 2-1.8 1.2-15.2 13.8-27 29.2-27h23.3c15.4 0 28 11.9 29.3 26.9.1 1 .9 1.8 2 1.8 1.2 0 2.1-1 2-2.2-1.5-17.1-15.9-30.5-33.4-30.5zM50 51.7c12.9 0 23.3-10.5 23.3-23.3S62.9 5 50 5 26.7 15.5 26.7 28.4 37.1 51.7 50 51.7zM50 9c10.7 0 19.3 8.7 19.3 19.3 0 10.7-8.7 19.3-19.3 19.3S30.7 39 30.7 28.4C30.7 17.7 39.3 9 50 9z" />
    </svg>
  );
}

export default Avatar;
