// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const main = (
  projectId = process.env.GOOGLE_CLOUD_PROJECT,
  cloudRegion = 'us-central1',
  datasetId,
  consentStoreId
) => {
  // [START healthcare_create_consent_store]
  const google = require('@googleapis/healthcare');
  const healthcare = google.healthcare({
    version: 'v1',
    auth: new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    }),
  });

  const createConsentStore = async () => {
    // TODO(developer): uncomment these lines before running the sample
    // const cloudRegion = 'us-central1';
    // const projectId = 'adjective-noun-123';
    // const datasetId = 'my-dataset';
    // const consentStoreId = 'my-consent-store';
    const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}`;
    const request = {parent, consentStoreId};

    await healthcare.projects.locations.datasets.consentStores.create(request);
    console.log(`Created consent store: ${consentStoreId}`);
  };

  createConsentStore();
  // [END healthcare_create_consent_store]
};

// node createConsentStore.js <projectId> <cloudRegion> <datasetId> <consentStoreId>
main(...process.argv.slice(2));
