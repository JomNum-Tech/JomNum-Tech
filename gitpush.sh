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

# Commit changes with the provided message
if git commit -m "$commit_message"; then
    echo "Commit successful: $commit_message"
else
    echo "Error: Commit failed."
    exit 1
fi

# Push changes to the remote repository
if git push; then
    echo "Git push completed successfully!"
else
    echo "Error: Push failed."
    exit 1
fi

echo "All operations completed successfully!"