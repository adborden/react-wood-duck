import React from 'react';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
  render() {
    const activeNavLinkClassName = this.props.active
      ? 'active-navlink'
      : 'inactive-navlink';
    const activeAnchorClassName = this.props.active ? 'active' : '';
    const indentationClassName = `indent-level${this.props.indentationLevel}`;
    return (
      <li className="navlink" key={this.props.text}>
        <span className={activeNavLinkClassName + ' ' + indentationClassName} />
        {this.props.preIcon && <i className={this.props.preIcon} />}
        <a
          href={this.props.href}
          className={activeAnchorClassName}
          onClick={e => this.props.handleClick(this.props.href, e)}
        >
          {this.props.text}
        </a>
        {this.props.postIcon && <i className={this.props.postIcon} />}
        {this.props.children}
      </li>
    );
  }
}

NavLink.propTypes = {
  /** NavLink Text  */
  text: PropTypes.string.isRequired,
  /** NavLink url/href */
  href: PropTypes.string.isRequired,
  /** Pre Icon css class name(s) */
  preIcon: PropTypes.string,
  /** Post Icon css class name(s) */
  postIcon: PropTypes.string,
  /** Indicates if current NavLink is actively selected */
  active: PropTypes.bool,
  /** Hyperlink On Click Handler */
  handleClick: PropTypes.func,
  /** It is used to align nested Navigation links */
  indentationLevel: PropTypes.number,
  /** This property is used to display nested elements under NavLink  */
  children: PropTypes.node,
};

NavLink.defaultProps = {
  active: false,
  indentationLevel: 0,
};

export default NavLink;
