import React, { Component } from 'react'
import Locate from '../../components/Locate'
import ab from '../../../assets/introducing/images/ab.jpg'


export default class About extends Component{
    render(){
        return (
			<>
            <div className="main-banner-2">

			</div>
			
			<Locate locate="Sobre nós"/>

			<section className="w3ls-bnrbtm py-5" id="about">
				<div className="container py-xl-5 py-lg-3">
					<div className="title-section text-center mb-md-5 mb-4">
						<h3 className="w3ls-title mb-3">About <span>Us</span></h3>
						<p className="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
							explicabo.Nemo
							enim totam rem aperiam.</p>
					</div>

					<div class="row">

						<div class="col-lg-6 pr-xl-5 mt-xl-2 mt-lg-0">
							<h3 class="title-sub mb-4">Donec conse sapien archi<br />ut cursus rhons.</h3>
							<p class="sub-para">Nullam dui mi, vulputate ac metus
								at, semper
								varius orci. Nulla accumsan ac elit in congue. Class aptent taciti sociosqu ad litora torquent
								per conubia.</p>	

						</div>
						<div class="col-lg-6 text-center mt-lg-0 mt-4">
							<img src={ab} alt="about" class="img-fluid" />
						</div>

					</div>
				</div>
			</section>

			</>
        )
    }
}