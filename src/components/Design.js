import React from 'react';

class Design extends React.Component {
    render() {
        return (
            <fieldset className="collapsable user_colors">
                <div className="collapsable__header collapsable__colors"> <i className="far fa-object-ungroup txt__color--orange"></i>
                <h2 className="collapsable__title title__colors">Diseña</h2>
                <i className="fas fa-chevron-down txt__color--grey-dark collapsable--rotate"></i>
                </div>
                <div className="palette collapsable__item collapsable--visible">
                    <label className="palette__label" htmlFor="p1">colores</label>
                    <div className="palette__container-colors">
                        <div className="input-box">
                            <input className="palette__radio js__radio1" id="p1" type="radio" value="1" name="palette" checked />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color[0] }}>dark green blue</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color[1] }}>dirty blue</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color[2] }}>hospital green</li>
                            </ul>
                        </div>
                        <label className="palette__label" htmlFor="p2"></label>
                        <div className="input-box">
                            <input className="palette__radio js__radio2" id="p2" type="radio" value="2"
                                name="palette" />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color2[0] }}>dried blood</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color2[1] }}>rusty red</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color2[2] }}>tomato</li>
                            </ul>
                        </div>
                        <label className="palette__label" htmlFor="p3"></label>
                        <div className="input-box">
                            <input className="palette__radio js__radio3" id="p3" type="radio" value="3"
                                name="palette" />
                            <ul className="colors">
                                <li className="square-color" style={{ backgroundColor: this.props.color3[0] }}>slate</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color3[1] }}>faded orange</li>
                                <li className="square-color" style={{ backgroundColor: this.props.color3[2] }}>light grey blue</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}
export default Design;