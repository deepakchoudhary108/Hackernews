import React , { Component }from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchMore } from '../actions';
import { getHostName,hidePosts , updateHiddenRows} from '../../helpers/helperFunction';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.fetchUsers();
	}
	
	renderUsers(){
		if(this.props.nextUsers.length!=0){
			return this.props.nextUsers.map((user,index)=>{
				return (
					<tr key={index} className="thin">
						<td>{user.num_comments}</td>
						<td>{user.points}</td>
						<td>{user.title}</td>
						<td>{getHostName(user.url)}</td>
						<td>by {user.author}</td>
						<td><a className="shown" onClick={e=>hidePosts(e)}>[Hide]</a></td>
					</tr>
				)
			})
		}else {
			return this.props.users.map((user,index)=>{
				return (
					<tr key={index} className="thin">
						<td>{user.num_comments}</td>
						<td>{user.points}</td>
						<td>{user.title}</td>
						<td>{getHostName(user.url)}</td>
						<td>by {user.author}</td>
						<td><a className="shown" onClick={e=>hidePosts(e)}>[Hide]</a></td>
					</tr>
				)
			})
		}
		document.querySelectorAll('tr.thin').addEventListener('click',hidePosts,false);
	}

	head() {
		return (
			<Helmet>
				<title>Hacker News App</title>
				<meta property="og:title" content="Hacker News App" />
			</Helmet>
		)
	}

	render(){
		return (<div>{this.head()}
			<div style={{background:"orange"}}>top | new </div>
			<table className="striped ">
				<thead>
				</thead>
				<tbody>
					{this.renderUsers()}

				</tbody>

			</table>
			<a  onClick={this.props.fetchMore} className="orange-text pl-20">More</a>
			</div>
		)
	}

}

function mapStateToProps(state){
	return {
		users: state.users,
		nextUsers: state.nextUsers

	}
}

export default connect(mapStateToProps, {fetchUsers,fetchMore})(HomePage);
