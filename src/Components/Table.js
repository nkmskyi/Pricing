function Table() {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ width: "34%" }}></th>
          <th style={{ width: "22%" }}>Free</th>
          <th style={{ width: "22%" }}>Pro</th>
          <th style={{ width: "22%" }}>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="tdtext">Public</th>
          <td>*</td>
          <td>*</td>
          <td>*</td>
        </tr>
        <tr>
          <th className="tdtext">Private</th>
          <td></td>
          <td>*</td>
          <td>*</td>
        </tr>
        <tr>
          <th className="tdtext">Permissions</th>
          <td>*</td>
          <td>*</td>
          <td>*</td>
        </tr>
        <tr>
          <th className="tdtext">Sharing</th>
          <td></td>
          <td>*</td>
          <td>*</td>
        </tr>
        <tr>
          <th className="tdtext">Unlimited members</th>
          <td></td>
          <td>*</td>
          <td>*</td>
        </tr>
        <tr>
          <th className="tdtext">Extra security</th>
          <td></td>
          <td></td>
          <td>*</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
