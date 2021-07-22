import { FlyoutButtonProps } from '../../../interface';
import './flyoutButton.scss';

const FlyoutButton = ({
  handleMobileNav,
  isShowMobileNav
}: FlyoutButtonProps): JSX.Element => {

  return (
    <button
      className={`flyout-button ${isShowMobileNav ? 'flyout-button--active' : ''}`}
      onClick={handleMobileNav}
    >
      <span className="flyout-button__stripe"></span>
      <span className="flyout-button__stripe"></span>
      <span className="flyout-button__stripe"></span>
    </button>
  );
};

export default FlyoutButton;