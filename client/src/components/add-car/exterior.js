import React from 'react';
import { Link } from 'react-router'

class Exterior extends React.Component {
	render() {
		return (
			<div className="exterior">
				<div className="exterior__damage-visual">
					<div className="exterior__box">
						<button className="exterior__damage-item" style={{'left':'33px', top:'265px'}} type="button"
								value="1" tabindex="0">
							1
						</button>
						<button className="exterior__damage-item" style={{'left':'85px', top:'174px'}} type="button"
								value="2" tabindex="0">
							2
						</button>
						<button className="exterior__damage-item" style={{'left':'85px', top:'357px'}} type="button"
								value="3" tabindex="0">
							3
						</button>
						<button className="exterior__damage-item" style={{'left':'168px', top:'265px'}} type="button"
								value="4" tabindex="0">
							4
						</button>
						<button className="exterior__damage-item" style={{'left':'302px', top:'265px'}} type="button"
								value="5" tabindex="0">
							5
						</button>
						<button className="exterior__damage-item" style={{'left':'480px', top:'265px'}} type="button"
								value="6" tabindex="0">
							6
						</button>
						<button className="exterior__damage-item" style={{'left':'675px', top:'265px'}} type="button"
								value="7" tabindex="0">
							7
						</button>
						<button className="exterior__damage-item" style={{'left':'779px', top:'265px'}} type="button"
								value="8" tabindex="0">
							8
						</button>
						<button className="exterior__damage-item" style={{'left':'843px', top:'265px'}} type="button"
								value="9" tabindex="0">
							9
						</button>
						<button className="exterior__damage-item" style={{'left':'776px', top:'357px'}} type="button"
								value="10" tabindex="0">
							10
						</button>
						<button className="exterior__damage-item" style={{'left':'776px', top:'174px'}} type="button"
								value="11" tabindex="0">
							11
						</button>
						<button className="exterior__damage-item" style={{'left':'132px', top:'519px'}} type="button"
								value="12" tabindex="0">
							12
						</button>
						<button className="exterior__damage-item" style={{'left':'215px', top:'513px'}} type="button"
								value="13" tabindex="0">
							13
						</button>
						<button className="exterior__damage-item" style={{'left':'376px', top:'473px'}} type="button"
								value="14" tabindex="0">
							14
						</button>
						<button className="exterior__damage-item" style={{'left':'514px', top:'473px'}} type="button"
								value="15" tabindex="0">
							15
						</button>
						<button className="exterior__damage-item" style={{'left':'619px', top:'512px'}} type="button"
								value="16" tabindex="0">
							16
						</button>
						<button className="exterior__damage-item" style={{'left':'715px', top:'492px'}} type="button"
								value="17" tabindex="0">
							17
						</button>
						<button className="exterior__damage-item" style={{'left':'132px', top:'17px'}} type="button"
								value="18" tabindex="0">
							18
						</button>
						<button className="exterior__damage-item" style={{'left':'215px', top:'18px'}} type="button"
								value="19" tabindex="0">
							19
						</button>
						<button className="exterior__damage-item" style={{'left':'377px', top:'58px'}} type="button"
								value="20" tabindex="0">
							20
						</button>
						<button className="exterior__damage-item" style={{'left':'514px', top:'59px'}} type="button"
								value="21" tabindex="0">
							21
						</button>
						<button className="exterior__damage-item" style={{'left':'619px', top:'19px'}} type="button"
								value="22" tabindex="0">
							22
						</button>
						<button className="exterior__damage-item" style={{'left':'715px', top:'39px'}} type="button"
								value="23" tabindex="0">
							23
						</button>
					</div>
				</div>

				<div className="nav-buttons">
					<Link to="/add-car/car-form" className="custom-btn">Назад</Link>
					<Link to="/add-car/exterior-functional" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default Exterior;
