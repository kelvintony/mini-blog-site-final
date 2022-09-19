import React from 'react';

import SectionA from '../../components/SectionA/SectionA';
import Navbar from '../../components/Navbar/Navbar';
import SectionC from '../../components/SectionC/SectionC';
import SectionD from '../../components/SectionD/SectionD';

const Home = () => {
	return (
		<div>
			<SectionA />
			<Navbar />
			<SectionC />
			<SectionD />
		</div>
	);
};

export default Home;
