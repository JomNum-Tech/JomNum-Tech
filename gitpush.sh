#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0"
    echo "This script commits and pushes changes to the current Git repository."
    exit 1
}

# Check if the current directory is a Git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "Error: Not inside a Git repository."
    usage
fi

# Get the list of updated or newly created files
changed_files=$(git diff --cached --name-only)

# Function to show loading animation (progress bar)
show_progress() {
    local duration=$1
    local interval=0.1
    local total_steps=$((duration / interval))
    
    echo -n "["
    for ((i=0; i<total_steps; i++)); do
        sleep $interval
        echo -n "#"
    done
    echo "] Done"
}

while true; do
    echo -n "Enter commit message (or press Enter for auto-commit based on file changes): "
    read commit_message

    # Remove leading and trailing whitespace
    commit_message_trimmed="$(echo -e "${commit_message}" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"

    if [ -z "$commit_message_trimmed" ]; then
        # If no manual message, create auto-commit message based on changed files
        if [ -z "$changed_files" ]; then
            commit_message="Auto commit (no specific file changes)"
        else
            # Use the list of changed files for the commit message
            commit_message="Auto commit: updated $(echo $changed_files | tr '\n' ' ')"
        fi
        break
    else
        commit_message="$commit_message_trimmed"
        break
    fi
done

# Stage all changes (if not already staged)
git add .

# Commit changes with the provided message in the background with loading animation
{
    git commit -m "$commit_message"
} &

# Get the process ID of the last command (git commit)
pid=$!

# Show progress bar while committing
show_progress 3  # Adjust duration as needed

# Check if the commit was successful and notify user
if wait $pid; then
    echo "Commit successful: $commit_message"
else
    echo "Error: Commit failed."
    exit 1
fi

# Push changes to the remote repository in the background with loading animation
{
    git push 
} &

# Get the process ID of the last command (git push)
pid=$!

# Show progress bar while pushing
show_progress 3  # Adjust duration as needed

# Check if the push was successful and notify user
if wait $pid; then
    echo "Git push completed successfully!"
else
    echo "Error: Push failed."
    exit 1
fi

echo "All operations completed successfully!"