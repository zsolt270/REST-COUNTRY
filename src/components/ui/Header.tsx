import style from "./css.modules/Header.module.css";

export default function Header() {
	return (
		<header className='py-3 px-2 px-sm-5  d-flex justify-content-between border-2 border-bottom border-opacity-10'>
			<p className={`fw-bold mb-0 ${style.fsSmall}`}>Where in the world?</p>
			<div className='d-flex gap-1 gap-sm-2 align-items-center'>
				<i className='bi bi-moon'></i>
				<p className='fw-bolder fs-6 mb-0'>Dark Mode</p>
			</div>
		</header>
	);
}
