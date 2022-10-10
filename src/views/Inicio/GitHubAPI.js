import { useState, useEffect } from "react";
import { Octokit } from '@octokit/core';
//
import { parseDate } from "../../utils/helpers";
//
import "./GitHubAPI.scss";


export function CommitList() {
	const token = process.env.REACT_APP_GH_API_TOKEN;

	const [received, setReceived] = useState(false);
	const [changelogs, setChangelogs] = useState(null);
	const [commits, setCommits] = useState([]);
	
	useEffect(() => {
		const octokit = new Octokit({ auth: token });
		async function fetchAPI() {
			const owner = 'CxrlosKenobi', repo = 'udecursos'

			try {
				const response = await octokit.request(
					`GET /repos/{owner}/{repo}/commits`, 
					{ owner, repo, per_page: 5 }
				);
				if (response.status === 200) {
					setCommits(response)
					setReceived(true)
				} else {
					console.log("Couldn't fetch data from the GitHub API :(")
					setReceived(false)
				}
			} catch(e) {
				console.log(e)
			}
		}
		fetchAPI()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	

	useEffect(() => {
		if (received) {
			setChangelogs(	
				commits.data.map(request => {
					return (
						<div key={request.sha} className="commit">
							<div className='profilepic-container'>
								<img src={request.author.avatar_url} alt='GitHub profile pic' />
							</div>
							<div className='commit-info'>
								<a href={request.author.html_url} className='_login' alt={request.commit.author.name}
                  target="_blank" rel="noopener noreferrer">
                  @{request.author.login}
								</a>
							</div>
							<div className='commit-desc'>
								<a href={request.html_url} className='_desc' target="_blank" rel="noopener noreferrer">
                  {request.commit.message}
								</a>
							</div>
							<div className='_date'>
								<h2>{parseDate(request.commit.author.date)}</h2>
							</div>
						</div>
					);
				})
			)
		} else {
			setChangelogs(
        <div className='changelogs-error'>
          <p>Obteniendo datos de la API . . .</p>
        </div>
			)
		}
	}, [received, commits])
	
  return changelogs
};
