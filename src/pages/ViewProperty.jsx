import React from 'react';

const ViewProperty = () => {
  return (
    <div className="app-content mt-4">
      <div className='container-fluid'>
        <div className="card mb-4">
          <div className="card-header mt-2">
            <h3 className="card-title">View All Property</h3>
            <div className="card-tools">
              <ul className="pagination pagination-sm float-end">
                <li className="page-item"><a className="page-link" href="#">«</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>

          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width: 10}}>#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style={{width: 40}}>Label</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>1.</td>
                  <td>Update software</td>
                  <td>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                    </div>
                  </td>
                  <td><span className="badge text-bg-danger">55%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ViewProperty;