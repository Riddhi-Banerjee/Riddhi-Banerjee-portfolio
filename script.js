function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  showPopup(true);
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    function addRecommendation() {
    // Get the values from the input fields
    let name = document.getElementById("name_input").value.trim();
    let message = document.getElementById("new_recommendation").value.trim();

    // Validate input (optional)
    if (message === "") {
        alert("Please enter a recommendation message.");
        return;
    }

    // Create a recommendation entry
    let recommendation = document.createElement("div");
    recommendation.classList.add("recommendation-entry");

    // Construct the content
    recommendation.innerHTML = `
        <p><strong>${name ? name : "Anonymous"}:</strong> ${message}</p>
    `;

    // Append the new recommendation to the page
    document.getElementById("recommendations_container").appendChild(recommendation);

    // Clear input fields after submission
    document.getElementById("name_input").value = "";
    document.getElementById("new_recommendation").value = "";
}

// Attach event listener to the button
document.getElementById("recommend_btn").addEventListener("click", addRecommendation);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
