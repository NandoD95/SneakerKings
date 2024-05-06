import React from "react"

function SneakerSize({ setSneakerSize }) {
    // The option menu to select the size
    return (
        <select
            className="Sizes"
            onChange={(e) => setSneakerSize(e.target.value)}>
            <option>All</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
        </select>
    )
}

export default SneakerSize;