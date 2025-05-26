import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <table>
            <caption>MC-IPCWD8M Camera Specifications</caption>
            <thead>
              <tr>
                <th>Category</th>
                <th>Feature</th>
                <th>Details (MC-IPCWD8M)</th>
                <th>Feature</th>
                <th>Details (MC-IPCWD8M)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={5} className="category-header">
                  Camera
                </td>
                <td>Image Sensor</td>
                <td>1/2.8" 8MP SONY COMS Sensor</td>
                <td>Min Illumination</td>
                <td>0Lux(IR ON)</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>3840x2160</td>
                <td>SNR</td>
                <td>39dB</td>
              </tr>
              <tr>
                <td>Pixels</td>
                <td>8.0MP@30fps</td>
                <td>Synchronization</td>
                <td>Internal</td>
              </tr>
              <tr>
                <td>Compression</td>
                <td>H.265+/H.265/H.264</td>
                <td>Bitrate</td>
                <td>64Kbps-12Mbps</td>
              </tr>
              <tr>
                <td>Frame Rate</td>
                <td>30fps</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td rowSpan={2} className="category-header">
                  Lens
                </td>
                <td>Lens Mount</td>
                <td>CS</td>
                <td>Lens</td>
                <td>Optional</td>
              </tr>

              <tr>
                <td>Viewing Angle</td>
                <td>Optional</td>
                <td>Focus Control</td>
                <td>Manual</td>
              </tr>

              <tr>
                <td rowSpan={12} className="category-header">
                  Function
                </td>
                <td>Exposure Mode</td>
                <td>Auto</td>
                <td>External Interface</td>
                <td>Support Audio Input</td>
              </tr>
              <tr>
                <td>Gain Control</td>
                <td>Auto</td>
                <td>Remote Operation</td>
                <td>System 、 Stream 、 User 、 Network Management</td>
              </tr>
              <tr>
                <td>White Balance</td>
                <td>Auto</td>
                <td>Alarm</td>
                <td>E-mail 、 Client</td>
              </tr>
              <tr>
                <td>Digital noise reduction</td>
                <td>3D DNR</td>
                <td>IP Self-Adaption</td>
                <td>Support</td>
              </tr>
              <tr>
                <td>OSD</td>
                <td>Support</td>
                <td>Image setting</td>
                <td>Mirror 、 Rotate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductCard;
