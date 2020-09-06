import React from 'react'
import SoftwareDevelopment from './SoftwareDevelopment'
import WebDevelopment from './WebDevelopment'
import AppDevelopment from './AppDevelopment'
import SystemMaintenence from './SystemMaintenence'
import HardwareRepaire from './HardwareRepaire'
import SystemAdmin from './SystemAdmin'

function Services() {
    return (
        <div className="mt-3">
            <div className="row w3-center mt-3 mb-3">
                <div className="col-4">
                    <div className="card">
                        <SoftwareDevelopment />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                       <WebDevelopment />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <AppDevelopment />
                    </div>

                </div>
            </div>

            <div className="row w3-center mt-3 mb-3">
                <div className="col-4">
                    <div className="card">
                        <SystemMaintenence />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <HardwareRepaire />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <SystemAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
